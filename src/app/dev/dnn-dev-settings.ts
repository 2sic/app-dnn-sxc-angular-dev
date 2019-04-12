import { RuntimeSettings } from '@2sic.com/dnn-sxc-angular';

const set = new RuntimeSettings();
set.ignoreMissing$2sxc = true;
set.ignoreMissingServicesFramework = true;

set.moduleId = 2363;
set.tabId = 1103;
set.contentBlockId = 2363;

set.antiForgeryToken = 'ThisIsaTestAntiForgeryToken';
set.path = "http://app-dev.2sxc.org/app-dnn-sxc-angular-dev/DesktopModules/2sxc/API/";
//set.appNameInPath = 'app-dnn-sxc-angular-dev'

export const DnnDevSettings = set;
