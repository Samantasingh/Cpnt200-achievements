'use strict';

/**
 * blue-shirt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blue-shirt.blue-shirt');
