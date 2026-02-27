
import { Router } from 'express';
import * as AdminController from '../controllers/admin.controller';

const router = Router();

// Dashboard & Stats
router.get('/stats', AdminController.getStats);
router.get('/activity', AdminController.getActivity);

// Gestão de Artistas
router.get('/artists', AdminController.getArtists);
router.post('/artists', AdminController.createArtist);
router.get('/artists/:id', AdminController.getArtistById);

// Catálogo & Obras
router.get('/tracks', AdminController.getTracks);
router.post('/tracks', AdminController.createTrack);
router.patch('/tracks/:id/status', AdminController.updateTrackStatus);

// Financeiro
router.get('/royalties', AdminController.getRoyalties);
router.post('/royalties/process', AdminController.processRoyalties);
router.get('/payments', AdminController.getPayments);
router.get('/invoices', AdminController.getInvoices);

// Jurídico & Contratos
router.get('/contracts', AdminController.getContracts);
router.post('/contracts', AdminController.createContract);
router.get('/licenses', AdminController.getLicenses);

// Operacional
router.get('/distribution', AdminController.getDistributionStatus);
router.get('/releases', AdminController.getReleases);
router.get('/analytics', AdminController.getAnalytics);

// Plataforma
router.get('/site', AdminController.getSiteConfig);
router.patch('/site', AdminController.updateSiteConfig);
router.get('/users', AdminController.getAdminUsers);
router.get('/settings', AdminController.getSettings);

export default router;
