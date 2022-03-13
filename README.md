# Pset Groups

## Website

This website was built to help Stanford students find pset groups for their classes.

Built with the help of a [Next JS boilerplate](https://github.com/ixartz/Next-js-Boilerplate) and [MIT's psetpartners](https://github.com/AndrewVSutherland/psetpartners).

## Matching

The matchings are created using Edmonds' [blossom algorithm](http://jorisvr.nl/article/maximum-matching), where each edge weight is `1 / (1 + d)` where `d` is the weighted euclidian distance between two responses.
