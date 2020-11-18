<template>
    <div>
        <h2>Build</h2>
        <p>This page will guide you through creating a new project based on someone else's github repo and get it working on your local machine.</p>
        <h3>Step 1: Create a New WebApp Using The Template</h3>
        <p>
            The first step in this process is to locate the main repo in Kyle's GitHub account and create a new repo based on that.
        </p>
        <ol>
            <li>
                <p>Send Kyle the email address you used to register for GitHub in chat.</p>    
            </li>
            <li>
                <p>Accept the invitation to the repo in your inbox.</p>    
            </li>
            <li>
                <p>Browse to the repo and click the "Use this template" button at the top of the repo file listing.</p>
            </li>
            <li>
                <p>Enter in the Repository name you'd like to use.</p>
            </li>
            <li>
                <p><b>Important: </b>Choose to make the repo "Private".</p>
            </li>
            <li>
                <p>Click the "Create repository from template" button.</p>
            </li>
        </ol>
        <h3>Step 2: Clone the Repo</h3>
        <p>
            The next step is to clone the newly created repo to your local machine.  To do that, use the "Code" link on your new repo to get the https url.
        </p>
        <p>Note: the following steps are done from the command line. <br><small>CMD in windows, Terminal in MacOS</small></p>
        <ul>
            <li>
                <p>Go to the c:\ directory</p>
                <p><code>cd c:\</code></p>
            </li>
            <li>
                <p>Create a directory to use for your source code.</p>
                <p><code>mkdir projects</code></p>
            </li>
            <li>
                <p>Browse to the projects directory.</p>
                <p><code>cd projects</code></p>
            </li>
            <li>
                <p>Clone the repo from GitHub<p>
                <p><code>git clone [YOUR REPO URL]</code></p>
            </li>
            <li>
                <p>Change to the cloned directory</p>
                <p><code>cd Herriman.FBLA.WebApp</code></p>
            </li>
            <li>
                <p><b>Important:</b> Leave this command-line session open!  We'll be coming back to this.</p>
            </li>
        </ul>
        <h3>Step 3: Run the Example</h3>
        <p>
            Now you have a couple of options for running it.
        </p>
        <h5>Option 1: Command-line Method</h5>
        <p>This option uses the command line to utilities to run the server.</p>
        <p>Note: the following steps are done from the command line. <br><small>CMD in windows, Terminal in MacOS</small></p>
        <ol>
            <li>
                <p>From the directory the project is cloned into install the package.</p>
                <p><code>npm install</code></p>
            </li>
            <li>
                <p>Now launch the web server.</p>
                <p><code>npm run serve</code></p>
            </li>
        </ol>
        <h5>Option 2: Run it in a container</h5>
        <p>This option uses Docker to run your server in a container.  This isn't great for developing but its a great way to make sure the repo will run when deployed.</p>
        <p>Note: the following steps are done from the command line. <br><small>CMD in windows, Terminal in MacOS</small></p>
        <ol>
            <li>
                <p>Compose and start the container. <br><small>This may take a couple of minutes the first time.</small></p>
                <p><code>docker-compose up</code></p>
            </li>
        </ol>
        <h5>Option 3: VSCode Method</h5>
        <p>This option uses VSVCode to launch the server.  Note: technically its the same execution as the first option, just tied to a menu option.</p>
        <ol>
            <li>
                <p>Open Visual Studio Code and browse to the directory you used to clone the repo. <br>c:\projects\Herriman.FBLA.WebApp</p>
            </li>
            <li>
                <p>Go to the "Run" menu and choose "Run without Debugging".</p>
            </li>
        </ol>
        <h3>So what did you just do?</h3>
        <p>You just copied a repository from GitHub, put it in your GitHub account so that you can change it and got it working on your local machine.</p>
        <p>Next up...<router-link to="/develop">let's change it.</router-link></p>
    </div>
</template>