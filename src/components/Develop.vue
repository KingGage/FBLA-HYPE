<template>
    <div>
        <h2>Develop</h2>
        <p>This page will guide you through the process of changing your local repo and updating your GitHub repo with the change.
        <h3>Step 1: Create a Branch</h3>
        <p>
            This step will create a new branch of the repo for you to make changes.
        </p>
        <p>Note: the following steps are done from the command line. <br><small>CMD in windows, Terminal in MacOS</small></p>
        <ul>
            <li>
                <p>Create a new local branch and check it out.<br>Be sure to pick a branch name you'll recognize.</p>
                <p><code>git checkout -b [YOUR BRANCH NANME HERE]</code></p>
            </li>
        </ul>
        <h3>Step 2: Run the Server</h3>
        <ol>
            <li>
                <p>Now launch the web server.</p>
                <p><code>npm run serve</code></p>
            </li>
        </ol>
        <h3>Step 3: Update the Home Page</h3>
        <p>
            Now we will change the Home component in the Example to say something different.
        </p>
        <p>
            <b>Background: </b>This application is using a SPA framework where the entire site is basically one web page.  That one web page uses routes to determine 
            what to load into the content section of the page.  So the home "page" is actually a home "component" that is loaded based on the route.
        </p>
        <ol>
            <li>
                <p>From inside VSCode, browse to the "src/components" folder and find "Home.vue".</p>
            </li>
            <li>
                <p>Edit the HTML of the component to say hello to your name.</p>
                <p>Change this:</p>
                <p><code>&lt;h3&gt;Hello, [Your Name Goes Here]!&lt;/h3&gt;</code></p>
                <p>To this:</p>
                <p><code>&lt;h3&gt;Hello, Rickee!&lt;/h3&gt;</code></p>
                <p>...or your name</p>
            </li>
            <li>
                <p>Save the file.</p>
                <p>File -> Save</p>
            </li>
        </ol>
        <br>
        <h2>Question: Did the repo change?</h2>
        <br><br>
        <h3>Step 4: Add, Commit and Push</h3>
        <p>Now it's time to add your changes and push your branch to the remote.</p>
        <ol>
            <li>
                <p>Add the changes you've made to the repo.</p>
                <p><code>git add *</code></p>
            </li>
            <li>
                <p>Commit the changes to the branch.</p>
                <p><code>git commit -m "[YOUR MESSAGE HERE]"</code></p>
            </li>
            <li>
                <p>Push the changes to the remote.</p>
                <p><code>git push</code></p>
            </li>
        </ol>
        <h3>Step 5: Create a Pull Request and Merge</h3>
        <ol>
            <li><p>From the main page in GitHub for your project, select the branch dropdown at the top. (probably says "master")</p></li>
            <li><p>From that dropdown choose "View all branches".</p></li>
            <li><p>Next to your changed branch you'll see an option for "New pull request". Click that button.</p></li>
            <li><p>Enter in some kind of comment and click the "Create pull request" button.</p></li>
            <li><p>Pretending you've done some code review, choose "Merge pull request" and "Confirm merge".</p></li>
        </ol>
        <h3>So what did you just do?</h3>
        <p>You just branched the code, changed it and pushed the change to GitHub where you approved and merged the change back into the master branch.</p>
        <p>Next up...<router-link to="/deploy">let's deploy it.</router-link></p>
    </div>
</template>