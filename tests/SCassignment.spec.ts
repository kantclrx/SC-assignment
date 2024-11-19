import { test, expect } from '@playwright/test';
test.describe('Submit form', () => {
  
  test('Verify that the user can submit the form with valid data.', async  ({page}) => {
    const header = page.locator('[data-id="5"]') //always use unique attributes to locate elements in order to prevent flaky tests eg. id, custom attribute
    const question_1 = page.locator('[data-id="22"]') 
    const radio_group = page.locator('[data-id="24"]')
    const banana_button = page.locator('[value="Banana"]') //just another example of how to locate an element when it doesn't have an ID or a custom attribute
    const pizza_slider = page.locator('[role="slider"]');
    const power_input_field = page.locator('[data-id="37"]')
    const boing_checkbox = page.locator('button[id="Boing"]')
    const whistle_checkbox = page.locator('button[id="Shistle"]')
    const meow_checkbox = page.locator('button[id="Meow"]')
    const submit_button = page.locator('[data-id="44"]')
    const success_popup = page.locator('[data-id="49"]')

    

    //Verify element visibility
    await page.goto('/') //navigates to the base URL defined in the Playwright configuration file.
    await expect(header).toHaveText('Quirky Quiz Time')
    await expect(header).toBeVisible()
    await expect(question_1).toContainText('If you could be a fruit, which one would you be?')
    await expect(radio_group).toHaveAttribute('role', 'radiogroup')
    await expect(radio_group).toBeVisible() //this is just an example of how to verify that all important elements are visible to the user. I will skip this for now and focus on writing the test for the submit flow.

    //Submit form flow
    await banana_button.click()
    await expect(banana_button).toHaveAttribute('aria-checked', 'true');//to verify that button is selected
    await page.evaluate(() => {//I'm not sure if this line of code will work because I don't have prior experience dealing with this type of slider element. So, I looked for a solution on Google.
      const pizza_slider = document.querySelector('[role="slider"]')
      pizza_slider?.setAttribute('aria-valuenow', '10')
    })
    await expect(pizza_slider).toHaveAttribute('aria-valuenow', '10');
    await power_input_field.fill('test')
    await expect(power_input_field).toHaveValue('test')
    await boing_checkbox.click()
    await whistle_checkbox.click()
    await meow_checkbox.click()
    await expect(boing_checkbox).toHaveAttribute('aria-checked', 'true')
    await expect(whistle_checkbox).toHaveAttribute('aria-checked', 'true')
    await expect(meow_checkbox).toHaveAttribute('aria-checked', 'true')
    await submit_button.click()
    await expect(success_popup).toBeVisible()
    await expect(success_popup).toContainText('Congratulations!')

  })

  //All test cases should align with the test case documentation.

  test.skip('Verify that the user cannot submit the form when all required fields are left blank.', async  ({page}) => {
    //If we have the time and resources, we can also cover additional cases, such as negative tests.
  })

  test.skip('Verify that the user cannot submit the form if the fruit selection field is not selected.', async  ({page}) => {
    //If we have the time and resources, we can also cover additional cases, such as negative tests.
  })

  test.skip('Verify that the user cannot submit the form if the superpower field is left blank.', async  ({page}) => {
    //If we have the time and resources, we can also cover additional cases, such as negative tests.
  })

  test.skip('Verify that the user cannot submit the form if the quiz\'s sound effect is not selected', async  ({page}) => {
    //If we have the time and resources, we can also cover additional cases, such as negative tests.
  })
})