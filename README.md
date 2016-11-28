Angular 2 Form with file upload to file system, image path stored to Mongo. Project is built using the MEA2N/MEAN2 stack. This project could be used as an angular2-seed.

## TODO
1. Resize the image client-side in order to reduce bandwidth of the server.

# Angular 2 Form

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

The goal of this project is to submit a form with one file upload and two text fields. The form is submitted to back end, the file is stored in the `uploadsFolder` and then the file path/url is stored in MongoDB among the two text fields. At the end, the form ID is assinged to the signed in user ID (via Ref) for later viewing all the form fields and file in the front end.

##Prerequisites
1. MongoDB installed and running (http://mongodb.org)
2. Node.js and NPM installed (http://nodejs.org)
3. [ImageMagick](http://www.imagemagick.org/script/index.php) or [GraphicsMagick](http://www.graphicsmagick.org/) installed,
more info in [gm](https://github.com/aheckmann/gm) page on how to install depending your Operating System. If installing ImageMagick on Windows, please check "Install Legacy Utitities (e.g. convert") during installation otherwise node will report errors.

## Specs
1. User login/signup using JSON Web Token (jwt)
2. User password reset via email (nodemailer & SendGrid)
3. Toastr Notifications (& Error Handling)
4. Multipart form submission with image preview before upload (some of the upload logic is taken from primeng ui).
5. Storing images to file system
6. Storing image path to MongoDB among text fields
7. Triple check if image is actually a file by checking it's mime type in both back end and in front end (`gm` in back end checks if file is an image too by reading first bytes of the file, need to fix this to not allow form to be submitted at all)
8. Double check for the image size in both back end and front end, file limit now is 5.000.000 bytes (5MB)
9. Image resize server side using [GraphicsMagick](https://github.com/aheckmann/gm)
10. Form deletion among the file from filesystem, user forms array is updated too.
11. Edit form, user can edit the text inputs and the image or update only the image or update only the text fields.

## Packages Used
`Angular-cli v1.0.0-beta.21` <br />
`Angular v2.2.1` <br />
`Webpack` <br />
`Node v6.9.1` <br/>
`MongoDB v3.2.10` <br/>
`Mongoose v4.7.0` <br />
`Express v4.14.0` <br />
`angular2-jwt` 0.1.25 (only for checking the expiration date of the jwt token) <br />
`jsonwebtoken` 7.1.9 <br />
`Multer v1.2.0` <br />
`ng2-toastr v1.3.1` <br />
`ng2-progress-bar 0.0.5` <br />
`gm v1.23.0` <br />
`BootStrap 3`  (css is included in `assets` folder) <br/>
`Font Awesome` (css is included in `assets` folder) <br/>
`Glyphicons`   (found in `fonts` folder under `assets`) <br/>

## Installing Dependecies
1. Clone this repo from Git
2. Run `npm install` in your command line 
3. Edit `config.js` in `/server/config` folder 

## Building the Angular2 app
Run `ng build`

A new `dist` folder will be created with all files needed to run the Angular 2 app in front end.

If you want to make changes on the Angular2 app and auto-refresh the `dist` folder then run the following command in your terminal:
 `ng build --watch`

## Running the server
Run `npm start`
If you want to make changes on the Server and auto refresh the back end code then run: `nodemon npm start`. If you don't have nodemon installed, run `npm install nodemon -g`.

## Viewing the App
Open your favourite web browser and point to `http://localhost:3000`

Enjoy!

## Help with angular-cli
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Preview of the app
### Login Form
![Login Form](https://cloud.githubusercontent.com/assets/717975/20486222/8dddb670-b007-11e6-861a-18f2123f70f4.png)
### Password Reset Form
![forgot_password](https://cloud.githubusercontent.com/assets/717975/20642267/6a60daf0-b413-11e6-960d-2b12ec98a839.png)
### Form
![Form](https://cloud.githubusercontent.com/assets/717975/20486257/abfd4166-b007-11e6-8e2e-24d2afd746a0.png)
### Server Response in console logs
![Server response after submitting form](https://cloud.githubusercontent.com/assets/717975/20238428/053e95ec-a8f4-11e6-93ab-04258e359e13.png)
### User Forms
![user_form](https://cloud.githubusercontent.com/assets/717975/20642263/3f1acc7a-b413-11e6-8737-cb28e93ce48f.png)
### Edit Form
![edit_form](https://cloud.githubusercontent.com/assets/717975/20598422/ce519cde-b251-11e6-919d-898855445f20.png)
### Users document in MongoDB with forms array ref
![Users document in MongoDB](https://cloud.githubusercontent.com/assets/717975/20486315/eaa5b452-b007-11e6-9080-b1c8186bf404.png)
### Forms Document in MongoDB with ref to the user._id (owner field)
![User submitted forms page](https://cloud.githubusercontent.com/assets/717975/20486402/411bbf20-b008-11e6-9170-05f44d610cd8.png)
