## Password-Generator-2000

Authored by Charissa Hollister 04/29/2022

# HTML and CSS
Site has a simple style to keep the focus on generating a unique and secure password<br />
Site has a button to use to initiate password generation<br />
After the button is clicked a secure password will display for the user<br />
HTML linked to the javascript file and CSS<br />
Password display is in a font that is clear and easily read to prevent user from misreading characters<br />


# Script
link to IDs for the generate button and the secure password display<br />
Click of the "generate password" button initiates the process<br />
A series of prompts for password criteria allow for varied user needs:<br />
    - character length (8 to 128)<br />
    - case<br />
    - numbers<br />
    - special characters<br />
At least one criteria is required for user to continue<br />
Password generated uses the criteria indicated only<br />

# Website Info
https://charissahollister.github.io/Password-Generator-2000/<br/ >
https://github.com/CharissaHollister/Password-Generator-2000

![ScreenShot](./assets/Screenshot%20Password%20Generator%20Webpage.jpg)



# Assignment criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

# Future improvement opportunities
Add quicklink to copy password to clipboard
Add ability to display or hide the new password for discretion
Inline criteria through booleans to simplify the process and to see all selected criteria choices for end user
Add favicon
Update background



# plan?
//click button
//prompt "would you like to generate a password?"
//alert telling them which criteria they will be allowed to choose from
//request password length between 8 and 128
//include lowercase?
//include uppercase?
//include numeric?
//include special characters?
//if none selected then user is sent back to select at least one
//confirm: summary of the criteria that will be used, continue or reselect?
//password is generated using the criteria
//password is displayed in Secure Password box

