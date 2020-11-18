<template>
    <div>
        <h2>Deploy</h2>
        <p>Now that you've pushed your changes to the remote branch, you can create a Pull Request to get the changes to the master branch.</p>
        <h3>Step 1: Create a Free Account on Heroku.com</h3>
        <ol>
            <li><p>Browse to <a href="https://heroku.com" target="_blank">Heroku.com</a> and click the "Sign up" button.</p></li>
            <li><p>Enter your email address there and finish the sign up form.</p></li>
        </ol>
        <h3>Step 2: Install the Heroku CLI</h3>
        <ol>
            <li><p>Browse to the <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank">Heroku Dev Center</a> and follow the download and install instructions.</p></li>
        </ol>
        <h3>Step 3: Create an application in Heroku</h3>
        <ol>
            <li><p>From the Heroku main page, choose "New" -> "Create new app".</p></li>
            <li><p>Choose a name that is unique to your application.</p></li>
        </ol>
        <h3>Step 4: Change the application to be a "container"</h3>
        <p><small>Note: this step seems hacky but you only have to do it once.</small></p>
        <ol>
            <li><p>Open a new command prompt window and browse to your project's directory.</p></li>
            <li>
                <p>Login to Heroku</p>
                <p><code>heroku login</code></p>
                <p>This will prompt you to hit any key, which will open a web browser and let you "Log In" by clicking the button.</p>
            </li>
            <li>
                <p>Once logged in, set the stack of your application in Heroku.</p>
                <p><code>heroku stack:set container -a [Your App Name Here]</code></p>
            </li>
        </ol>
        <h3>Step 5: Deploy your application from GitHub</h3>
        <ol>
            <li><p>From the Heroku web page, browse to your application.</p></li>
            <li><p>Click on the "Deploy" tab.</p></li>
            <li><p>Down the page, choose "GitHub" from the deployment methods.</p></li>
            <li><p>After connecting to your github account, find your repo and click "Connect".</p></li>
            <li><p>Once the repo is loaded, scroll down the page to the Manual Deploy options and choose "Deploy Brancgh".</p></li>
        </ol>
        <h3>Step 6: Once it's done celebrate!</h3>
        <p>You just created a new web app, changed it, pushed the change to GitHub and then deployed your web app in a container to the cloud.</p>
    </div>
</template>