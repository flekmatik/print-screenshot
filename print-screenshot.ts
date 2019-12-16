import { browser } from 'protractor';

export async function printScreenshot(screenshotName?: string) {
    const pngData = await browser.takeScreenshot();
    console.log(`Generated screenshot ${screenshotName ?? `(${screenshotName})` }: ${pngData}`);
}
