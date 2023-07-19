const testIdPropName = 'data-test-id';

interface ITestIdProp {
	[testIdPropName]: string;
}

/**
 * Function intended to provide a unified test ID to various components.
 */
export function createTestId(testId?: string): ITestIdProp | null {
	return testId ? { [testIdPropName] : testId } : null;
}
