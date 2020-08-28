import iterate_array

fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]

import unittest

class TestStringMethods(unittest.TestCase):

    def test_iterate_array(self):
        serie = iterate_array.buildFibonacciSequence(15)
        self.assertEqual(serie, fibonacciSequence)

if __name__ == '__main__':
    unittest.main()