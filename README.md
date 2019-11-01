# pine
A wiki builder.

## spec

### Portals, pages, and resources

Portals are a hub
wikiname.tld/portal_name

Pages are documentation
wikiname.tld/portal_name/page

Resources are media associated with pages
wikiname.tld/portal_name/page/alias_to_resources/image.jpg

pine should be smart enough to consolidate resources and reference them via an alias.  For example, the engineering portal may have a front end page that references an image of a UI.  The design portal may have a ui design page that also references the same UI image.  In engineering we should see engineering/front_end/resources/ui.jpg, and in design we should see design/ui_design/resources/ui.jpg.  Resources will point at the same bucket.


### Users and admins

Admin only
- moderate changes
- ban users
- add logo

Admin and users
- create user profile
- edit
- mark as stub


### Editing

- edit history
- markdown


### Tooling

- get all stubs
    collects all page stubs

### Components
- card
    - can have title
    - can contain children of any kind
- side navigation
    - meta navigatioon
- drawer
    - can contain list