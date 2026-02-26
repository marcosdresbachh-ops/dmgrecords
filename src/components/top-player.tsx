
export function TopPlayer() {
  return (
    <div className="w-full bg-black border-b border-white/5 h-[31px] overflow-hidden">
      <iframe 
        src="https://player.svrdedicado.org/player-barra/6862/000000" 
        frameBorder="0" 
        width="100%" 
        height="31"
        className="block"
        title="DMG Radio Player"
      />
    </div>
  );
}
