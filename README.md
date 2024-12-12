
## PWAs - Progressive Web Applications - P2P Delivery: Creating Our PWA

https://github.com/sniegockajulia/PWA-Game

Description of the Practice

The task consists of converting the previously developed shooting game into a Progressive Web Application (PWA). In this game, the user controls the main character (a square) using keyboard arrows or touch screen. The game was initially created in the third project, and the base code is available in the description. If you decide to use your own solution from previous modules, you can achieve a more complete game with enhanced interaction.
The goal of this practice is to modify the existing code to transform the game into a PWA. To do this, you must follow the detailed steps below:

Add a Manifest: You need to create a manifest.json file that defines the fundamental metadata of the application, such as name, icons, background color, and preferred orientation. The manifest is essential to make the application installable on users' devices and ensure a more native experience.
Add a Service Worker: Next, you need to incorporate a Service Worker into the project. This script will run in the background, controlling the offline experience of the game. A Service Worker allows you to handle cached resources, enable push notifications, and ensure that the game functions even without an internet connection, providing a seamless experience without interruptions.
Manage Resource Caching: To improve the efficiency and availability of the game, you must manage the caching of essential resources through the Service Worker. This involves defining which files should be cached so they can be loaded regardless of the user's connection status. Proper cache management is key to ensuring the application behaves progressively, offering a smooth experience even without internet access.
Add an Installation Option via an Additional Button: You need to incorporate a button in the interface that allows users to install the application directly on their devices. This element reinforces the native app-like appearance, enabling faster and more direct access to the game. Implement the beforeinstallprompt event to handle this functionality effectively.
Deploy the PWA on Glitch: Finally, once the above steps are implemented, you will need to deploy your PWA on a hosting platform like Glitch. Glitch simplifies the process of quickly testing and sharing projects. You must create an account on glitch.com, upload your project, and ensure that all PWA functionalities are fully operational.
