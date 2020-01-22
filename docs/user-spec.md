# User model
A user model holds the most basic level of authentication.  By default, users can edit articles.
typ
```
User.model = {
    biography: {
        max_length: 300,
        type: String
    },
    email: {
        characters: \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b,
        max_length: 320,
        required: True,
        type: String
    },
    password: {
        type: String,
        max_length: 128,
        minLength: 8,
        characters: ...,
        required: True
    },
    username: {
        characters: ^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$,
        max_length: 20,
        min_length: 3,
        type: String
    },
    website: {
        characters: ^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$,
        max_length: 320,
        type: String
    }
}
```