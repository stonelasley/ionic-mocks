# ionic-mocks
Simple Mocking of common Ionic 2 Dependencies

This project is still very early in development and there are several things to workout. However since this is only meant
to be used in your tests it should be safe to pull into a project.

## Supported Types
- ActionSheet
- ActionSheetController
- Alert
- AlertController
- App
- Content
- Events
- Haptic
- InifiniteScroll
- Keyboard
- Loading
- LoadingController
- Menu
- MenuController
- Modal
- ModalController
- Platform
- Popover
- PopoverController
- NavController
- NavParams
- Tab
- Tabs
- Toast
- ToastController
- ViewController

## Installation
```bash
npm install --save-dev ionic-mocks
```

### Examples

```typescript
import {Events, AlertController} from 'ionic-angular';
import {EventsMock, AlertControllerMock} from 'ionic-mocks';

describe('IonicComponent', () => {

    let events: Events;
    let alertCtrl: AlertController;

    let classUnderTest: MyClassUnderTest;

    beforeEach(() => {

        events = EventsMock.instance();
        alertCtrl = AlertControllerMock.instance();

        classUnderTest = new MyClassUnderTest(events, alertCtrl);
    });


    it('should subscribe to events', () => {
    	expect(events.subscribe).toHaveBeenCalled();
    });

    it('should call alert create', () => {

        classUnderTest.showAlert();

        expect(alertCtrl.create).toHaveBeenCalled();
    });
});
```

### Simple Mocking of dependency return types
```typescript
import {Events, AlertController, Alert} from 'ionic-angular';
import {EventsMock, AlertControllerMock, AlertMock} from 'ionic-mocks';

describe('IonicComponent', () => {

    let alert: Alert;
    let events: Events;
    let alertCtrl: AlertController;

    let classUnderTest: MyClassUnderTest;

    beforeEach(() => {

        events = EventsMock.instance();
        alert = AlertMock.instance():
        alertCtrl = AlertControllerMock.instance(alert);

        classUnderTest = new MyClassUnderTest(events, alertCtrl);
    });


    it('should call present on alert', (done) => {

        classUnderTest.showAlert().then(() => {
            expect(alert.present).toHaveBeenCalled();
            done();
        });

    });
});
```
