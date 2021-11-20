import puppeteer, { Browser, Page } from "puppeteer";

describe("App.tsx", () => {
    let browser: Browser;
    let page: Page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();

        await page.goto("http://localhost:3000");
        await page.waitForSelector("#form");
    });

    it("expect valid date", async () => {

        await page.click(".data-input");
        await page.keyboard.press("ArrowLeft");
        await page.keyboard.press("ArrowLeft");
        await page.type(".data-input", "08302021");
        
        const date = await page.$eval(".data-input", (e: any) => e.value);

        expect(date).toBe("2021-08-30");
        
    });

    it("expect valid categoria", async () => {
        const categoria = await page.$("#form > label:nth-child(2) > select");

        const categorias = await page.$$eval("#form > label:nth-child(2) > select > option", (options) => options.map(op => {
            return {
                index: (op as any).value,
                categoria: op.textContent
            }
        }));

        let expectedCategoriaValue = null;

        categorias.forEach(c => {
            if (c.categoria === 'Salário') {
                categoria?.select(c.index);
                expectedCategoriaValue = c.categoria;
            }
        });

        expect(expectedCategoriaValue).toBe("Salário");
    });

    it("expect valid titulo", async () => {
        await page.click(".titulo-input");
        await page.type(".titulo-input", 'Programa');

        const titulo = await page.$eval(".titulo-input", (e: any) => e.value);

        expect(titulo).toBe('Programa');
    });

    it("expect valid valor", async () => {
        await page.click(".valor-input");
        await page.type(".valor-input", '1000');

        const valor = await page.$eval(".valor-input", (e: any) => e.value);

        expect(valor).toBe("1000");
    });

})
