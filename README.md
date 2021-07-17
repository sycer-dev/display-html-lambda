# display-html-lambda
> a lambda function to fetch an HTML file uploaded to the Discord CDN and display it on the web - [example](https://lambda.fyko.net/?uri=https://cdn.discordapp.com/attachments/581635926757998613/866081381456805919/display-html-lambda.html)

## Setting up and deploying the Lambda function

Start by running `yarn` to install all dependencies.

### Create a Serverless account & AWS provider

1. Create a [Serverless](https://app.serverless.com) account -- note the username you provide, its the name of your `org`.
2. Go to `org` on the side bar then `providers`.
3. Click `add` then create a `Simple` provider. Put in any name you'd like then click `Connect AWS provider`.
4. You'll then be redirect to AWS. Click the acknowledgement at the bottom then `Create`.

### Download and log into the `serverless` cli app
1. Download the CLI app with your favorite package manager. I do `yarn global add serverless`
2. Run `serverless login`.


### Edit `serverless.yml`
Edit the `org` field in `serverless.yml` to what `org` reads on the [Serverless dashboard](https://app.serverless.com) (this is the same value as your username, likely).

### Deploy
Run `serverless deploy` or `./deploy.sh` to deploy the service. It may fail on the first attempt with the error `Error: Application not found.`. Just run `serverless deploy` again and it will deploy properly.

## Using the API

The output of `serverless deploy` outputs the execute endpoint URL. It will look similar to `api-id.execute-api.region.amazonaws.com`. All you have to do then is attach the `uri` query paramater which has the value of that Discord CDN-Uploaded HTML file.  

Example:
```
https://foobar.execute-api.us-east-1.amazonaws.com/production?uri=https://cdn.discordapp.com/attachments/581635926757998613/866081381456805919/display-html-lambda.html
```

