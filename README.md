# Password-Generator-2000

Authored by Charissa Hollister 04/29/2022

## HTML and CSS
Site has a simple style to keep the focus on generating a unique and secure password<br />
Site has a button to use to initiate password generation<br />
After the button is clicked a secure password will display for the user<br />
HTML linked to the javascript file and CSS<br />
Password display is in a font that is clear and easily read to prevent user from misreading characters<br />


## Script
link to IDs for the generate button and the secure password display<br />
Click of the "generate password" button initiates the process<br />
A series of prompts for password criteria allow for varied user needs:<br />
    - character length (8 to 128)<br />
    - upper case<br />
    - lower case<br />
    - numbers<br />
    - special characters<br />
At least one criteria is required for user to continue<br />
Give an alert and return if input is invalid<br /> 
Password generated uses the criteria indicated only<br />
Password will contain at least 1 of each criteria selected<br />


## Website Info
### https://charissahollister.github.io/Password-Generator-2000/
### https://github.com/CharissaHollister/Password-Generator-2000

![ScreenShot](./assets/Screenshot%20Password%20Generator%20Webpage.jpg)


## Future improvement opportunities
Add quicklink to copy password to clipboard *Completed*<br />
Add ability to display or hide the new password for discretion<br />
Inline criteria through booleans to simplify the process and to see all selected criteria choices for end user<br />
Have user verify they are satisfied with the password *completed*<br />
Add favicon<br />
Update background<br />

## Minimum customer criteria
GIVEN I need a new, secure password<br />
WHEN I click the button to generate a password<br />
THEN I am presented with a series of prompts for password criteria<br />
WHEN prompted for password criteria<br />
THEN I select which criteria to include in the password<br />
WHEN prompted for the length of the password<br />
THEN I choose a length of at least 8 characters and no more than 128 characters<br />
WHEN asked for character types to include in the password<br />
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters<br />
WHEN I answer each prompt<br />
THEN my input should be validated and at least one character type should be selected<br />
WHEN all prompts are answered<br />
THEN a password is generated that matches the selected criteria<br />
WHEN the password is generated<br />
THEN the password is either displayed in an alert or written to the page<br />
