# tech_blog14

## Table of Contents

- [Description](#description)
- [Features](#features)
- [User Flow](#user-flow)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Description

tech_blog14 is a CMS-style blog site designed for users who want to create, view, update, and delete blog posts. It features user authentication, commenting on blog posts, and session management. This platform is ideal for individuals seeking to share their thoughts, projects, or any content that benefits from a blog format, providing a seamless user experience from signing up to managing and interacting with content.

## Features

- **User Authentication:** Secure sign-up and login process.
- **Blog Post Management:** Create, view, update, and delete blog posts.
- **Commenting:** Users can comment on blog posts to engage with content.
- **Session Management:** Automatic session timeouts with prompts for re-login for idle users.
- **Dashboard:** A personalized dashboard for managing user posts.

## User Flow

1. **First Visit:** Users are greeted with the homepage displaying existing blog posts, navigation links, and login options.
2. **Sign-Up/Sign-In:** Navigation prompts new users to sign up or existing users to sign in.
3. **Homepage Navigation:** Allows users to view blog posts with titles and creation dates.
4. **Viewing Blog Posts:** Users can click on blog posts to see detailed contents, author information, and comments.
5. **Commenting:** Signed-in users can leave comments on blog posts.
6. **Dashboard Access:** Users can view their posts and have the option to add new ones.
7. **Post Management:** Users can add, update, or delete their blog posts from the dashboard.
8. **Logout:** Users can sign out via the navigation link.
9. **Idle Session Handling:** Idle users are prompted to log in again for adding, updating, or deleting posts.

## Installation

To set up tech_blog14 locally, follow these steps:

1. Clone the repository to your local machine.
2. Install necessary dependencies by running `npm install`.
3. Configure your environment variables for database connections and session management.
4. Initialize the database using the provided schema.
5. Start the server with `npm start` and visit `http://localhost:3000` to access the site.

## Contributing

Contributions to tech_blog14 are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes with clear, descriptive messages.
4. Push the branch to your fork.
5. Submit a pull request against the main tech_blog14 repository.

Please ensure your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to clone, modify, and use it as per the license conditions.


