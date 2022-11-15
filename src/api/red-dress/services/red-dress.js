'use strict';

/**
 * red-dress service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::red-dress.red-dress');
