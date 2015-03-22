# SF Base Election Data (SFBED)

SFBED is an open data project to collect and provide baseline information
about San Francisco elections.

To permit a higher level of quality and accuracy, the focus will be on the
information that tends to remain the same from election to election (or
that changes infrequently).

See [here][SFBED_gh_page] for a sample web page created from this data.

If you notice any issues or have a suggestion, please file an issue in the
[issue tracker][issue_tracker].


## Overview

The data is provided as a single JSON file included in this repository:
[`data/sf.json`](data/sf.json).

Examples of the type of information that the project aims to provide include--

* all local, state, and federal offices that appear on San Francisco ballots,
* links to the official web site of each office or office body,
* the lengths of the terms of each office, and
* district information for each office (e.g. list of precincts).

The project focus is on the information that tends to remain the
same from election to election.  Thus, the project does not provide
information about candidates, election results, or current office holders.

Other project features include--

* textual information occurs in multiple languages (e.g. English,
  Chinese, Spanish, and Filipino);


## Use Cases

Possible uses of the data include
"[mashing up](http://en.wikipedia.org/wiki/Mashup_%28web_application_hybrid%29)"
with or otherwise supplementing presentations of--

* what is on the ballot,
* election results, or
* campaign finance information.


## The Data

This section documents the JSON structure, and how to construct objects
from the JSON.

TODO: explain the `_i18n` suffix.

### Office

Attributes:

* name_i18n: the office name, which may or may not be qualified with the
  jurisdiction (e.g. "UNITED STATES REPRESENTATIVE" is and "MAYOR" is not).
* url: the official URL for the office.

Construction:

* name:


## Sources

See Article XIII: ELECTIONS, SEC. 13.101. TERMS OF ELECTIVE OFFICE. of the
San Francisco Charter for information about terms of offices, etc.

Resources:

* [List of Local Elected Officials](http://www.sfgov2.org/index.aspx?page=832)
* [List of State Elected Officials](http://www.sfgov2.org/index.aspx?page=833)


## Contributors

Contributors should refer to the [contributor documentation](docs/develop.md)
for additional information.


## License

This project is licensed under the BSD 3-clause license.  See the
[`LICENSE`](LICENSE) file for details.


## Author

Chris Jerdonek (<chris.jerdonek@gmail.com>)


[issue_tracker]: https://github.com/cjerdonek/sf-base-election-data/issues
[SFBED_gh_page]: http://cjerdonek.github.io/sf-base-election-data
