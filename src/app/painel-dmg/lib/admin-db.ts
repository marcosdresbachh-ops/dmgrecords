
/**
 * @fileOverview Gerenciador de Banco de Dados Local para o Painel Administrativo.
 * Centraliza a persistência de artistas, músicas, contratos e configurações.
 */

export const getSeedArtists = () => [
  {id:'A001',name:'Luna Verona',role:'Composer',genre:'Indie Pop',country:'Brazil',email:'luna@example.com',phone:'+55 11 99999-0001',status:'active',tracks:8,streams:'142,800',royalties:'$3,420',joined:'10/03/2024',pro:'ECAD',ipi:'IPI-00123',bio:'Multi-award winning indie pop artist from São Paulo.'},
  {id:'A002',name:'Marco Esteves',role:'Musician',genre:'Jazz',country:'Brazil',email:'marco@example.com',phone:'+55 21 99999-0002',status:'active',tracks:12,streams:'89,400',royalties:'$2,180',joined:'15/01/2024',pro:'ECAD',ipi:'IPI-00124',bio:'Jazz guitarist and composer from Rio de Janeiro.'},
  {id:'A003',name:'Sofia Andrade',role:'Composer',genre:'Electronic',country:'Brazil',email:'sofia@example.com',phone:'+55 31 99999-0003',status:'active',tracks:6,streams:'220,100',royalties:'$5,640',joined:'20/06/2024',pro:'ECAD',ipi:'IPI-00125',bio:'Electronic music producer and DJ.'},
];

export const getSeedTracks = () => [
  {id:'T001',title:'Blue Horizon',artist:'Luna Verona',artistId:'A001',genre:'Indie Pop',duration:'3:42',isrc:'BRA123001',status:'distributed',platforms:['Spotify','Apple Music','YouTube Music'],streams:'84,200',royalties:'$2,050',released:'10/01/2025',type:'Single'},
  {id:'T002',title:'Midnight Rain',artist:'Luna Verona',artistId:'A001',genre:'Indie Pop',duration:'4:15',isrc:'BRA123002',status:'distributed',platforms:['Spotify','Apple Music'],streams:'58,600',royalties:'$1,370',released:'05/12/2024',type:'Single'},
  {id:'T003',title:'Porto do Sol',artist:'Marco Esteves',artistId:'A002',genre:'Jazz',duration:'5:28',isrc:'BRA123003',status:'distributed',platforms:['Spotify','Tidal'],streams:'31,200',royalties:'$750',released:'01/02/2025',type:'EP'},
];

export const AdminDB = {
  // ARTISTAS
  getArtists: () => {
    if (typeof window === 'undefined') return getSeedArtists();
    const data = localStorage.getItem('dr_artists');
    return data ? JSON.parse(data) : getSeedArtists();
  },
  saveArtists: (artists: any[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('dr_artists', JSON.stringify(artists));
  },

  // MÚSICAS
  getTracks: () => {
    if (typeof window === 'undefined') return getSeedTracks();
    const data = localStorage.getItem('dr_tracks');
    return data ? JSON.parse(data) : getSeedTracks();
  },
  saveTracks: (tracks: any[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('dr_tracks', JSON.stringify(tracks));
  },

  // CONFIGURAÇÕES
  getSettings: () => {
    if (typeof window === 'undefined') return {};
    const data = localStorage.getItem('dr_settings');
    return data ? JSON.parse(data) : { companyName: 'Dresbach Records LTDA', cnpj: '63.187.175/0001-70' };
  },
  saveSettings: (settings: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('dr_settings', JSON.stringify(settings));
  }
};
