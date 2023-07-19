> **System requirement** – a requirement affecting the whole system.

# Environment
### Platforms
Platforms we expect our product to operate.
> Examples:
> Desktop: Windows, Mac, Linux;
> Mobile: Android, OSx;

### Browsers
Browsers we expect our product to run on. Often defined in conjunction with platforms.
> Examples: Chrome, Safari, Edge;

### Layout
Define breakpoints when layout changes its structure in order to adapt for specific device types.
Be advised: these breakpoints should be derived from audience browsers and platforms usage.
> Example:   
> 
> Viewports: 
> * 320px - 480px mobile
> * 480px - 768px tablet
> * 768px - 1200px desktop  
> 
> Breakpoints: 
> * minWidth - 320px
> * tablet - 480px
> * desktop - 768px
> * maxWidth - 1200px

# Graphics

### Palette
All common colors should be defined in palette and named accordingly. This will allow us to unify colors and derive common language with design team.
Also, we need to know if we are going to implement theming.

### Typography
If we need consistent text styling, we need to define standards for basic text params (like system font, its sizes, etc...)

### Custom
Do we have any custom graphic-related requirements?
> Examples:
> * Prevent unnecessary user select;
> * Minimum animation time 0.3sec;
> * Display skeleton for loading contents;
> * Mobile-first design;
> * Keep header and footer sticked to their positions at all times.

# Data
### Localization
Are we going to support multiple languages?
Be advised: if you want to localise backend messaging, you may need some prep-work (e.g. implementing message codes)

### Validations
Any system has a collection of interacting objects (like users, goods, orders). Usually, those objects have properties having constraints actual everywhere in the system (like username max length is always 80 chars).
Collecting those constraints will allow us to sync those values between frontend and backend and build consistent and solid entity validation.

# Compliance
Are there any regulations for the industry we build the product for? Do we need to follow any guidelines?

### Accessibility
Accessibility is mandatory for many services planning to work with government. It also affects website ratings.

### SEO

If we expect the project to be promoted via SEO, we need to define what optimization mechanisms we will introduce.

### Security
If we have any security-related requirements, we better state it here.
> Examples:
> * Forbidden regions
> * Password regulation
> * Session timeouts
> * Auth key generation constraints

### GDPR
General Data Protection Regulation is mandatory in many domains. Do we need to comply?

### Testing
Every interactive component should have a test ID assigned.  
Non-interactive component test ID assignment is optional.
