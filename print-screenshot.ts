import { browser } from 'protractor';

export async function printScreenshot(screenshotName?: string) {
    const pngData = await browser.takeScreenshot();
    const encodedScreenshot = new Buffer(pngData, 'base64');
    console.log(`Generated screenshot ${screenshotName ?? `(${screenshotName})` }: ${encodedScreenshot}`);
}
