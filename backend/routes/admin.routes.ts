
import { Router } from 'express';
import * as AdminController from '../controllers/admin.controller';

const router = Router();

// Mapeamento Industrial das 20 Subpáginas

// 1 & 2. Core Dashboard & Activity
router.get('/stats', AdminController.getStats);
router.get('/activity', AdminController.getActivity);

// 3. Gestão de Artistas
router.get('/artists', AdminController.getArtists);
router.post('/artists', AdminController.createArtist);

// 4. Catálogo & Obras
router.get('/tracks', AdminController.getTracks);
router.post('/tracks', AdminController.createTrack);

// 5. Álbuns & EPs
router.get('/albums', AdminController.getAlbums);

// 6. Contratos
router.get('/contracts', AdminController.getContracts);

// 7, 8 & 9. Distribuição, Plataformas e Lançamentos
router.get('/distribution', AdminController.getDistributionStatus);
router.get('/platforms', AdminController.getPlatforms);
router.get('/releases', AdminController.getReleases);

// 10, 11 & 12. Financeiro (Royalties, Pagamentos, NFs)
router.get('/royalties', AdminController.getRoyalties);
router.get('/payments', AdminController.getPayments);
router.get('/invoices', AdminController.getInvoices);

// 13, 14 & 15. Ferramentas (Analytics, Marketing, Licenças)
router.get('/analytics', AdminController.getAnalytics);
router.get('/marketing', AdminController.getMarketingCampaigns);
router.get('/licenses', AdminController.getLicenses);

// 16, 17 & 18. Plataforma (Site, Hub, Relatórios)
router.get('/site', AdminController.getSiteConfig);
router.get('/hub/members', AdminController.getHubMembers);
router.post('/reports/generate', AdminController.generateReport);

// 19 & 20. Admin (Usuários, Configurações)
router.get('/users', AdminController.getAdminUsers);
router.get('/settings', AdminController.getSettings);

export default router;
