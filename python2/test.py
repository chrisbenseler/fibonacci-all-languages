from main import modules

fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

import unittest

def create_test(module, description):
    error_format = "\nExpected:  %s\nGot:       %s"
    def test_module():
        value = module.buildFibonacciSequence(15)
        if value != fibonacciSequence:
            raise AssertionError(error_format % (fibonacciSequence, value))
    test_module.__name__ = 'test_'+module.__name__
    return unittest.FunctionTestCase(test_module, description=description)

tests = unittest.TestSuite()

for description, module in modules.iteritems():
    tests.addTest(create_test(module, description))

if __name__ == '__main__':
    runner = unittest.TextTestRunner()
    runner.run(tests)
