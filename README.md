# App Components: Rule Action Example App Server

This is an example [app server](https://developers.asana.com/docs/app-server) used to demonstrate [App Components - Rule Action](https://developers.asana.com/docs/rule-actions).

The responses for this application are hard coded as an example for what the response data could look like. In a production environment this data would be stored and modified, rather than having each endpoint return hard coded responses.

<br/>

## Step 1 - Run the application

1. Install the dependencies:

```
npm install
```

2. Download and install [ngrok](https://ngrok.com/download) on your computer.

3. Open up two terminal windows.

4. In the first terminal, run ngrok on port `8000`.

```
ngrok http 8000
```

_Note: This port is defined in `index.js`. Feel free to change the port number if 8000 is already in use._

5. Copy the ngrok "Forwarding" URL from the output in the previous step (e.g., https://6a04-197-123-188-14.ngrok.io). You will use this to substitute `<YOUR_NGROK_URL>` below.

6. In the second terminal, export the ngrok URL in an environment variable called `BASE_URL`. The app uses this environment variable in some of the responses (see `responses.js`).

```
export BASE_URL=<YOUR_NGROK_URL>
```

7. While still in the second terminal, start the server. This server must be kept running when using the app in Asana.

```
npm run dev
```

<br/>

## Step 2 - Set up app in Asana

1. Log into your Asana account and navigate to the [Developer Console](https://app.asana.com/0/developer-console)

2. Select **Create new app** to create a new app (feel free to choose an appropriate app name).

3. On the next screen, under the **Build** section of the sidebar, navigate to **App Components** > **Rule Actions** then select **+ Add action**. Fill in the following information and save:

        Display name: <YOUR_DISPLAY_NAME>

        Run action URL: <YOUR_NGROK_URL>/rule/run_action

        Form metadata URL: <YOUR_NGROK_URL>/rule/metadata

4. Under the **Build** section, navigate to **Install your app**. Fill in the following information and save:

        Add the authentication URL: <YOUR_NGROK_URL>/auth

5. Click on **+ Add organization**, then select an organization and click **Add** to save.

<br/>

## Step 3 - Test your Rule Action

1. Navigate to any project and click on **Customize** > **+ Add App**. Then, select your recently-created app and complete the auth process.

2. While still in the **Customize** menu, navigate to the **Rules** and click on **+ Add Rule** > **Create custom rule**. Then, select a trigger and choose your recently-created Rule Action (i.e., from Step 2.3 above) for the action. Modify any field in the rule action (This will trigger a call to the app server's on change endpoint which for demonstration purposes, fills in hardcoded values to make the save button available). Save your new rule.

3. Perform the action you set to trigger your new rule! You should see an output in the console containing a message and response.

<br/>

## Notes

Every time you start or restart ngrok, you will most likely get a different "Forwarding" URL. In such cases, be sure to go into the [Developer Console](https://app.asana.com/0/developer-console) to update your endpoints. You must also export the new ngrok URL into `BASE_URL` environment variable as well (i.e., from Step 1.6 above) .

We do not advise the use of ngrok beyond testing and debugging purposes. For production apps that use Rule Actions, an app server must be hosted in order for Rule Actions to function. For a brief list of popular hosting options, see [Hosting](https://developers.asana.com/docs/hosting). 

<br/>

## Resources:

- [Overview of App Components](https://developers.asana.com/docs/overview-of-app-components)
- [Getting Started](https://developers.asana.com/docs/getting-started) with App Components
- [Rule Actions](https://developers.asana.com/docs/rule-action)