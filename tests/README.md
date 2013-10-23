README
======

When running tests using the random number generators, be sure to reset the seed to a known value before running tests. 

'''
Math.seedrandom( utils.seed );
'''

This resets the seed for <pre>Math.rand()</pre> to the specified seed. This has importance when testing state generators.