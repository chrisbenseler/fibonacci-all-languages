import iterate_array
import iterate_array2
import recursive
import recursive2
import recursive3
import whileLoop
import generator

modules = {
    'Iterate array': iterate_array,
    'Iterate array (simpler)': iterate_array2,
    'Recursive': recursive,
    'Recursive (simpler)': recursive2,
    'Recursive with memory cache': recursive3,
    'While Loop': whileLoop,
    'Generator': generator,
}

if __name__ == '__main__':
    for description, module in modules.items():
        print(description, '-', module.__name__+':', module.buildFibonacciSequence(15))

