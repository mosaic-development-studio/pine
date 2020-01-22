# ↟↟↟ PINE product spec
#### A self-hosted wiki

## Description
PINE is a self-hosted wiki.  The goal is to be performant, minimal, aesthetic, and easy to setup and install.

## Views
Some distinctions:
- Public views require no authentication
- User views require a user account
    - Project admins may decide that a user account be approved before editing
- Admin views require an admin account

#### Common views
Views accessible by everyone

- Navigation
- Landing
    - Wiki search
    - Widgets
        - Sections of curated articles
- Article
    - high level information on the right
    - sticky wiki navigation on the left
    - search NOT stickied at the top
    - big high res images
    - available resources are images, audio, video
        - no canvas, etc
- Registration

#### User views
- Edit
    - Edit text (Mark down? Component based?)
    - Widgets(?)
- Diffing
    - Side by side? in-line?
- User settings
    - Username
    - Email
    - Profile information

#### Admin views
The idea here is that there will be no top-level auth for article viewing.  Access at that level is up to the owner.

- Project settings
    - User permissions
    - Thematic settings
    - Notifications
        - Changelog

## Models
Below you can find a link to the specs for each of the various db models.

### Article
The article is the most commonly viewed page.  It can be edited by users and admins alike, though admins can set privaledges that force changes to be approved, or that completely block users from editing.

The article schema can be found [here](./article-spec.md).

### User
The most basic user schema can be found [here](./user-spec.md).