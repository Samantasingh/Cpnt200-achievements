'use strict';

/**
 * white-shirt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::white-shirt.white-shirt');
