//izinsiz şekilde satışa konulması veya yayılması durumunda gerekli işlemler başlatılacaktır!!!
//Kodlarla oynamayanız!

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const setTitle = require("node-bash-title");
setTitle("SkyMagaza Token Gen");
const fs = require("fs");
async function main() {
  console.clear();

  ("use-scrict");

  const ps = require("prompt-sync");
  const prompt = ps();

  const colors = require("colors");
  

  console.log("Sweandyx#0001 Tarafından Yapılmıştır!");
  console.log("[" + "1".green + "] [" + "Program'ı - Başlat".green + "]");
  console.log("[" + "2".brightBlue + "] Program - Yardım");
  console.log("[" + "3".brightBlue + "] Program'dan - Çıkış Yap");
  let choice = prompt("[" + "?".brightBlue + "]>");

  if (choice == 1) {
    console.log("[" + "1".brightBlue + "] Çalışıyor - Tempmail.org");
    console.log("[" + "2".brightBlue + "] Çalışıyor - 10minemai");
    console.log("[" + "3".brightBlue + "] Çalışmıyor! - Tempmaildev");
    let emailchoice = prompt("[?]>");
    console.log(
      "[" +
        "!".red +
        "] Tokenleri WebHook a göndermek istiyormusun (๖ۣۜSweandyx#0001) (Y=evet,N=Hayır) y/n: "
    );
    let choicewbwile = prompt("[?]>");
    if (choicewbwile == "y") {
      webhook = prompt("๖ۣۜSweandyx#0001 Webhook: ");
    }
    console.log(
      "[" +
        "!".green +
        "] Tokenleri Sunucuya a göndermek istiyormusun (Y=evet,N=Hayır) y/n: "
    );
    let choicewbwile2 = prompt("[?]>");
    if (choicewbwile2 == "y") {
      sunucudavet = prompt("(Sweandyx#0001)Sunucu Davet Bağlantısı: ");
    }
    let tokensname = prompt(
      "Tokens username: ( (Sweandyx#0001) Boş Bırakırsanız Kendisi Random Yapıyor ) "
    );
    let HowTokens = prompt("(Sweandyx#0001) Kaç Token Oluşturmak İstiyorsun: ");

    const StealthPlugin = require("puppeteer-extra-plugin-stealth");
    const randchars = require("crypto");
    const puppeteer = require("puppeteer-extra");
    const { default: RecaptchaPlugin, BuiltinSolutionProviders } = require("puppeteer-extra-plugin-recaptcha");
const CapMonsterProvider = require("puppeteer-extra-plugin-recaptcha-capmonster");
CapMonsterProvider.use(BuiltinSolutionProviders);
    const { uniqueNamesGenerator, animals } = require("unique-names-generator");
    const { PuppeteerBlocker } = require("@cliqz/adblocker-puppeteer");
    const { fetch } = require("cross-fetch");
    const fs = require("fs");
	
const PROXY_ADDR = '154.13.90.91'
const PROXY_USERNAME = 'aqwnfelv-rotate'
const PROXY_PASSWORD = '99q359jabsxp'
    const cfg = {
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-infobars",
        "--window-position=0,0",
		"--proxy-server=" + PROXY_ADDR,
        "--window-size=1366,768",
      ],
      defaultViewport: null,
      ignoreHTTPSErrors: true,
      headless: false,
    };

    puppeteer.use(
    RecaptchaPlugin({
        provider: {
            id: "2captcha",
            token: "" 
        },
        visualFeedback: true 
    })
);

    const accounts = fs.createWriteStream("luckycommunity.txt", { flags: "a" });
    async function dsne(page, infoname, info) {
      const p = await page.$("input[name=" + infoname + "]");
      await p.focus();
      await page.keyboard.type(info);
    }

    async function cli(page, name, min, max) {
      var i = await page.$("input[id=" + name + "]");
      await i.click();
      
      var r = Math.floor(Math.random() * (max - min + 1)) + min;

      await page.waitForSelector("[class*=option]");
      await page.$eval(
        "[class$=option]",
        function (e, r) {
          e.parentNode.childNodes[r].click();
        },
        r
      );

      return r;
    }
	

  const emailSelector = `input[name="email"]`;
  const usernameSelector = `input[name="username"]`;
  const passwordSelector = `input[name="password"]`;
  const checkBoxSelector = `input[type="checkbox"]`;
  const submitbutton = `button[type="submit"]`;
  const verifybutton = `table[role="presentation"]`;
    async function discordInput(dspagee, username, password, email) {
      await dspagee.bringToFront();
      await dspagee.goto(`https://discord.com/register` , {
        waitUntil: "networkidle0",
        timeout: 100000,
      });

      await dspagee.type(emailSelector, email);
  await dspagee.type(usernameSelector, username);
  await dspagee.type(passwordSelector, password);
  await dspagee.click(".css-1hwfws3");
  await dspagee.keyboard.type("12");
  await dspagee.keyboard.press("Tab");
  await dspagee.keyboard.type("12");
  await dspagee.keyboard.press("Tab");
  await dspagee.keyboard.type("1995");

  
 
   dspagee.waitForSelector('input[type*=checkbox]').then(() => {
      dspagee.$eval('input[type*=checkbox]', el => el.click());
    }).catch(e => {});
 
   
   await  dspagee.$eval('button[type=submit]', (el) => el.click());

}

   
    async function captchaby(DiscordPage) {
      try {
        await DiscordPage.waitForSelector("[src*=sitekey]");
    console.log( "(Sweandyx#0001)Captcha bulundu!".red);

        while (true) {
          try {
            await DiscordPage.solveRecaptchas();
			 console.log( "(Sweandyx#0001)Captcha Geçildi!".green);
            return true;
          } catch (err) {
			   console.log("(Sweandyx#0001)Captcha - Hata".red);
            sleep(3000);
          }
        }
      } catch (e) {}
	  
    }
 
        
    async function enscookiegec(enscookie){
      let enscookies;
      if(!enscookies) return;
      
      }


    

    async function genmail(page2) {
      if (emailchoice == 1) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://10dk.email", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#email_id";

        try {
          await page2.waitForSelector(info_id);
		  
          return await page2.evaluate(() => {
        return document.querySelector('#email_id').textContent;
    });

          async function skyratelimit(skylimit){
            let limitsky;
            if(!limitsky) return;
            await sleep(300);
            
            }

          var email = await page2.$eval("#email_id", (el) => el.value);
          return email;
        } catch (e) {
          return false;
        }
      } else if (emailchoice == 2) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        await page2.bringToFront();
        await page2.goto("https://mail.gen.tr", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#mail";

        try {
          await page2.waitForSelector(info_id);
          await page2.waitForFunction(
            (info_id) =>
              document.querySelector(info_id).value.indexOf("@") != -1,
            {},
            info_id
          );

          async function ensratelimit(enslimit){
            let limitens;
            if(!limitens) return;
            await sleep(300);
            
            }

          var email = await page2.$eval("#mail", (el) => el.value);
          return email;
        } catch (e) {
          return false;
        }
      } else if (emailchoice == 3) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page2);
        });

        async function sky(skypage){
          console.log(" Discord İP Değişikliği Sweandyx#0001 Tarafından Sağlandı".green)
          
          }
          async function rozetal(rral){
          console.log("Sweandyx#0001 Discord Hesabına Rozet Almayı sağlıyor".green)
          let rozet;
          if(!rozet) console.log("Rozet Alınamadı".red)
          console.log("Sweandyx#0001 Rozet Koruma Aktiflestirildi".green)
          await page.focus();
          
          }

        await page2.bringToFront();
        await page2.goto("https://tempmail.dev/en/Gmail", {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        var info_id = "#current-mail";

        try {
          await page2.waitForSelector("#current-mail");
          const element = await page2.$("#current-mail");
          const email = await page2.evaluate(
            (element) => element.textContent,
            element
          );
          return email;
        } catch (e) {
          return false;
        }
      }
    }

    async function skycookiegec(skycookie){
      let skycookies;
      if(!skycookies) return;
      
      }


    async function emailvery(page2) {
      await page2.bringToFront();
      if (emailchoice == 1) {
        while (true) {
          try {
            await page2.waitForSelector("[title*=Discord]", { timeout: 500 });
            await page2.$eval("[title*=Discord]", (e) => e.parentNode.click());

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) {}
        }
      } else if (emailchoice == 2) {
        while (true) {
          try {
            await page2.waitForSelector("[title*=Discord]", { timeout: 500 });
            await page2.$eval("[title*=Discord]", (e) => e.parentNode.click());

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) {}
        }
      } else if (emailchoice == 3) {
        while (true) {
          try {
            await page2.waitForSelector("#inbox-dataList");
            await page2.click("#inbox-dataList");

            await page2.waitForSelector(
              "td > a[href*='discord'][style*=background]"
            );
            const elem = await page2.$eval(
              "td > a[href*='discord'][style*=background]",
              (el) => el.href
            );

            return elem;
          } catch (e) {}
        }
      }
    }

    async function verif2(chrom, link) {
      const page = await chrom.newPage();
      await page.goto(link, { waitUntil: "networkidle0", timeout: 60000 });
      captchaby(page);
    }

    const nickname = [` ${tokensname}`];

    async function create_accinfos(chrome, disc) {
      const username = uniqueNamesGenerator({
        dictionaries: [animals, nickname],
        separator: " ",
        style: "capital",
        length: 2,
      });
      const password = "SkyMedia5345.";
      const page2 = (await chrome.pages())[0];
      var email;

      while (!email) {
        try {
          email = await genmail(page2);
        } catch (e) {}
      }

      const dspage = disc;
      await discordInput(dspage, username, password, email);

      const client = disc._client;
      var token;

      client.on("Network.webSocketFrameSent", ({ response }) => {
        try {
          const json = JSON.parse(response.payloadData);
          if (!token && json["d"]["token"]) {
            token = json["d"]["token"];
          }
        } catch (e) {}
      });
      await captchaby(dspage);

      let verifyy = await emailvery(page2);
      await verif2(chrome, verifyy);

      return token;
    }



    (async () => {
      for (let i = 0; i < HowTokens; i++) {
        const browser = await puppeteer.launch(cfg);
        try {
          const page = await browser.newPage();
		  await page.authenticate({
      username: PROXY_USERNAME,
      password: PROXY_PASSWORD
    });
	  await page.goto('http://httpbin.org/ip');
          const infos = await create_accinfos(browser, page);
          accounts.write(infos + "\n");
          if (choicewbwile == "y") {
            let request = fetch(webhook, {
              method: "POST",
              headers: {
                accept: "*/*",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-GB",
                "content-length": "90",
                "content-type": "application/json",
                origin: "https://discord.com",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent":
                  "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9003 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36",
                "x-debug-options": "bugReporterEnabled",
                "x-super-properties":
                  "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMjI0NjMiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6InNrIiwiY2xpZW50X2J1aWxkX251bWJlciI6OTkwMTYsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9",
              },
              body: JSON.stringify({
                content: infos,
              }),
            });
          }
        } catch (e) {
          console.log(e);
        } finally {
          try {
            await sleep(30000)
            browser.close();
          } catch (e) {}
        }
        await sleep(115000);
      }
      await sleep(1000);
      main();
    })();
  } else if (choice == 2) {
    console.log("Yardım almak için Discord : Sweandyx#0001 Ekleyerek Yardım Alabilirsiniz");
    let reactionChoice = prompt("[" + "?".brightBlue + "]>");
    reactionChoice = main();
  } else if (choice == 3) {
    await sleep(1000);
  } else {
    console.log("YANLIS TIKLAMA".red);
    await sleep(1000);
    main();
  }
}

main();
