import React from 'react';

const LeaderboardDashboard = ({ players, totalSouls, isFullScreen, onDisqualify }) => {
  if (!players || players.length === 0) return null;

  return (
    <div className={isFullScreen ? "leaderboard-full" : "leaderboard-overlay"}>
      <div className="leaderboard-title">=== LIVE SOULS ===</div>
      <div style={{ fontSize: '12px', color: 'var(--c4)', textAlign: 'center', marginBottom: '10px' }}>
        TOTAL CONSUMED: {totalSouls}
      </div>
      
      {isFullScreen && (
        <div className="leaderboard-header" style={{ display: 'flex', color: 'var(--c2)', fontSize: '11px', borderBottom: '1px solid var(--c4)', paddingBottom: '5px', marginBottom: '10px', textTransform: 'uppercase' }}>
          <span style={{ flex: '0 0 35px' }}>RNK</span>
          <span style={{ flex: 1 }}>AGENT ID</span>
          <span style={{ flex: '0 0 50px' }}>SCR</span>
          <span style={{ flex: '0 0 45px' }}>LV</span>
          <span style={{ flex: '0 0 45px' }}>SLV</span>
          <span style={{ flex: '0 0 45px' }}>FLS</span>
          <span style={{ flex: '0 0 45px' }}>HNT</span>
          <span style={{ flex: '0 0 60px' }}>CHK</span>
          <span style={{ flex: '0 0 90px' }}>STATUS</span>
          {onDisqualify && <span style={{ flex: '0 0 50px' }}>ACT</span>}
        </div>
      )}

      {players.slice(0, 100).map((p, idx) => {
        let cls = "leaderboard-item";
        if (idx === 0 && p.status === 'active') cls += " top";
        if (p.status === 'dead' || p.status === 'disqualified') cls += " dead";
        if (p.status === 'won') cls += " won";

        if (isFullScreen) {
          return (
            <div key={p.id} className={cls} style={{ display: 'flex', fontSize: '13px', marginBottom: '8px', padding: '5px 0', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ flex: '0 0 35px', color: 'var(--c4)' }}>#{idx + 1}</span>
              <span style={{ flex: 1, color: (p.status === 'dead' || p.status === 'disqualified') ? 'var(--c2)' : 'var(--c1)', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name.toUpperCase()}</span>
              <span style={{ flex: '0 0 50px', color: 'var(--c3)' }}>{p.score}</span>
              <span style={{ flex: '0 0 45px' }}>{p.maxLv}</span>
              <span style={{ flex: '0 0 45px' }}>{p.solved}</span>
              <span style={{ flex: '0 0 45px', color: 'var(--c2)' }}>{p.fails || 0}</span>
              <span style={{ flex: '0 0 45px', color: 'var(--c3)' }}>{p.hintsUsed || 0}</span>
              <span style={{ flex: '0 0 60px' }}>{p.cps}</span>
              <span style={{ flex: '0 0 90px', fontSize: '11px', color: p.status === 'active' ? 'var(--c1)' : (p.status === 'dead' || p.status === 'disqualified' ? 'var(--c2)' : 'var(--c5)') }}>
                {p.status.toUpperCase()}
              </span>
              {onDisqualify && (
                <button 
                  onClick={() => onDisqualify(p.id)}
                  style={{ flex: '0 0 50px', background: 'transparent', border: '1px solid var(--c2)', color: 'var(--c2)', fontSize: '10px', cursor: 'pointer', padding: '2px 0' }}
                  disabled={p.status === 'disqualified'}
                >
                  DQ
                </button>
              )}
            </div>
          );
        }

        return (
          <div key={p.id} className={cls}>
            <span className="leaderboard-rank">#{idx + 1}</span>
            <span className="leaderboard-name">{p.name.toUpperCase()}</span>
            <span className="leaderboard-score">{p.score}</span>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderboardDashboard;
