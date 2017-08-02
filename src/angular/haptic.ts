export class HapticMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('Haptic', ['available',
            'gestureSelectionChanged',
            'gestureSelectionEnd',
            'gestureSelectionStart',
            'impact',
            'notification',
            'selection'
        ]);
        instance.available.and.returnValue(true);

        return instance;
    }
}
