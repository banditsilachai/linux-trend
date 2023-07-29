const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const url = "https://distrowatch.com/dwres.php?resource=popularity";
const distroName = require("./data/distroName.json");

function getLogo(name) {
  return `https://linux-trend.vercel.app/logos/${name}.png`.toLocaleLowerCase();
}

const scrap = async (childNum = 2) => {
  let month = 0;
  let resultObj = {
    createAt: [new Date().toISOString()],
  };

  switch (childNum) {
    case 1:
      month = 12;
      resultObj.last12months = [];
      break;
    case 2:
      month = 6;
      resultObj.last6months = [];
      break;
    case 3:
      month = 3;
      resultObj.last3months = [];
      break;
    case 4:
      month = 1;
      resultObj.last1months = [];
      break;
    default:
      break;
  }

  const savePath = path.join(`${__dirname}/data/last${month}months.json`);
  console.log(`Fetching data for last${month}months ⏳`);

  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  let distroCount = 271;

  for (let i = 2; i < distroCount; i++) {
    const nameSelector = await page.waitForSelector(
      `body > table.NavLogo > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(${childNum}) > table > tbody > tr:nth-child(${i}) > td.phr2 > a`
    );

    const rankSelector = await page.waitForSelector(
      `body > table.NavLogo > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(${childNum}) > table > tbody > tr:nth-child(${i}) > td.phr3`
    );

    const trendSelector = await page.waitForSelector(
      `body > table.NavLogo > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(${childNum}) > table > tbody > tr:nth-child(${i}) > td.phr3 > img`
    );

    const yesterdaySelector = await page.waitForSelector(
      `body > table.NavLogo > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(4) > table > tbody > tr:nth-child(2) > td.phr3`
    );

    const nameEvaluate = await nameSelector.evaluate(
      (element) => element.textContent,
      nameSelector
    );
    const rankEvaluate = await rankSelector.evaluate(
      (element) => element.textContent,
      rankSelector
    );
    const trendEvaluate = await trendSelector.evaluate(
      (element) => element.getAttribute("src"),
      trendSelector
    );
    const yesterdayEvaluate = await yesterdaySelector.evaluate(
      (element) => element.getAttribute("title"),
      yesterdaySelector
    );

    const getTrend = trendEvaluate.split("/")[2].split(".")[0].slice(1);

    let url = "";
    distroName.map((item) =>
      item.name === nameEvaluate ? (url += item.url) : url
    );

    switch (childNum) {
      case 1:
        resultObj.last12months.push({
          no: i - 1,
          name: nameEvaluate,
          rank: parseInt(rankEvaluate),
          trend: getTrend,
          url: url,
          logo: getLogo(nameEvaluate),
          yesterday: parseInt(yesterdayEvaluate.slice(11, 15)),
        });
        break;
      case 2:
        resultObj.last6months.push({
          no: i - 1,
          name: nameEvaluate,
          rank: parseInt(rankEvaluate),
          trend: getTrend,
          url: url,
          logo: getLogo(nameEvaluate),
          yesterday: parseInt(yesterdayEvaluate.slice(11, 15)),
        });
        break;
      case 3:
        resultObj.last3months.push({
          no: i - 1,
          name: nameEvaluate,
          rank: parseInt(rankEvaluate),
          trend: getTrend,
          url: url,
          logo: getLogo(nameEvaluate),
          yesterday: parseInt(yesterdayEvaluate.slice(11, 15)),
        });
        break;
      case 4:
        resultObj.last1months.push({
          no: i - 1,
          name: nameEvaluate,
          rank: parseInt(rankEvaluate),
          trend: getTrend,
          url: url,
          logo: getLogo(nameEvaluate),
          yesterday: parseInt(yesterdayEvaluate.slice(11, 15)),
        });
        break;
      default:
        break;
    }
  }

  fs.writeFile(savePath, JSON.stringify(resultObj, null, 2), "utf-8", (err) => {
    if (!err) {
      console.log(`last${month}months is saved. ✅`);
    }
  });
  await browser.close();
};

scrap(1);
scrap(2);
scrap(3);
scrap(4);
