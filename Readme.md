# Sign in Popup module for Magento 2

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://choosealicense.com/licenses/mit/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](mailto:dev@nikitaisakov.com?subject=[GitHub]%20Ask%20me%20anything)
[![Contributions welcome](https://img.shields.io/badge/Contributions-welcome-brightgreen.svg?style=flat)](https://github.com/razzzila-dev/golang-server-metrix-client/issues)

![Tested on >= Magento 2.3.2](https://img.shields.io/badge/Tested%20on->=%20Magento%202.3.2-f26322.svg)
![No DB Migrations](https://img.shields.io/badge/Deploy-No%20DB%20Migrations-26A2AA.svg)

## Installation
### Requirements:
 - "magento/module-customer": ">100.0"
 
### Package install
#### Manual installation
Download archive and unzip it.
Then move all files from `module-sign-in-popup` folder to the `<magento_root>/app/code/Razzzila/SignInPopup` folder.

#### Using Composer
Change working directory to `<magento_root>` and run:
```BASH
composer require razzzila-dev/module-sign-in-popup
bin/magento module:enable Razzzila_SignInPopup
bin/magento cache:flush
```

#### Build 
If you use not developer mode, you have to redeploy static content.
```BASH
rm -rf ./pub/static/frontend
rm -rf ./var/view_preprocessed/pub/static/frontend
bin/magento setup:static-content:deploy [locale] [-t=Vendor/themename] [-a=frontend]
```

## Support
This module is not my priority, so in time support not guaranteed. But feel free to open new issues and create pull-requests if needed.

## License
[MIT](https://choosealicense.com/licenses/mit/)
