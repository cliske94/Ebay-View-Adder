This is a Discord bot that generates page views for an ebay listing. For now, it must be run locally.

To use:

Add a .env file in the root directory. You will need a Discord bot token.
Add the following to the .env file

TOKEN=INSERT_TOKEN_HERE

The command to use the bot is !addviews number_to_add url_link
The number_to_add must be a number between 1 and 100
The url_link must be a string url to an ebay listing. There's barely any error checking, and I didn't write any tests lol. So don't break it!

e.g. !addviews 50 https://ebay.com/listing_blahblahblah
