import * as articleCommands from './commands/article';
import * as articleComments from './commands/comments';
import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(articleComments);
