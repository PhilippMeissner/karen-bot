# Karen bot
This is basically me, fiddling around with NestJS and Slack integrations.
So far it just performs string manipulations and sends back a message for Slack to display.

## How to use this as an API?
Easy! Just send a request with your desired string to manipulate to

https://custom-karen-bot.herokuapp.com/mutate?text=This%20is%20the%20text%20I%20want%20to%20manipulate
```
// Response
{
    "response_type": "in_channel",
    "text": "tHiS iS tHe TeXt I wAnT tO mAnIpUlAtE"
}
```

## Support on Slack Commands
For more information check [Slack slash commands](https://api.slack.com/interactivity/slash-commands).

## License

This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
