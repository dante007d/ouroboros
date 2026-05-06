import React from 'react';

const LeaderboardDashboard = ({ players, totalSouls, isFullScreen, onDisqualify }) => {
  const hasPlayers = players && players.length > 0;

  return (
    <div className={isFullScreen ? "leaderboard-full" : "leaderboard-overlay"}>
      <div className="leaderboard-title">=== LIVE SOULS ===</div>
      <div style={{ fontSize: '12px', color: 'var(--c4)', textAlign: 'center', marginBottom: '10px' }}>
        TOTAL CONSUMED: {totalSouls}
      </div>
      
      {!hasPlayers && (
        <div style={{ textAlign: 'center', padding: '20px', color: 'var(--c2)', fontSize: '12px' }}>
          -- NO SOULS DETECTED IN THE CURRENT CYCLE --
        </div>
      )}
      
      {hasPlayers && isFullScreen && (
        <div className="leaderboard-header" style={{ display: 'flex', color: 'var(--c4)', fontSize: '12px', borderBottom: '20px', paddingBottom: '10px', marginBottom: '15px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }}>
          <span style={{ flex: '0 0 45px' }}>RNK</span>
          <span style={{ flex: 1 }}>AGENT ID</span>
          <span style={{ flex: '0 0 60px' }}>SCORE</span>
          <span style={{ flex: '0 0 60px' }}>LVL</span>
          <span style={{ flex: '0 0 60px' }}>SLV</span>
          <span style={{ flex: '0 0 60px' }}>FAIL</span>
          <span style={{ flex: '0 0 60px' }}>HINT</span>
          <span style={{ flex: '0 0 80px' }}>CHKP</span>
          <span style={{ flex: '0 0 100px' }}>STATUS</span>
          {onDisqualify && <span style={{ flex: '0 0 60px' }}>ACTION</span>}
        </div>
      )}

      {hasPlayers && players.slice(0, 100).map((p, idx) => {
        let cls = "leaderboard-item";
        if (idx === 0 && p.status === 'active') cls += " top";
        if (p.status === 'dead' || p.status === 'disqualified') cls += " dead";
        if (p.status === 'won') cls += " won";

        if (isFullScreen) {
          return (
            <div key={p.id} className={cls} style={{ display: 'flex', fontSize: '15px', marginBottom: '4px', padding: '10px', alignItems: 'center', borderBottom: '1px solid rgba(184,255,0,0.1)', background: 'rgba(0,0,0,0.3)' }}>
              <span style={{ flex: '0 0 45px', color: 'var(--c4)' }}>#{idx + 1}</span>
              <span style={{ flex: 1, color: (p.status === 'dead' || p.status === 'disqualified') ? 'var(--c2)' : 'var(--c1)', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold' }}>{p.name.toUpperCase()}</span>
              <span style={{ flex: '0 0 60px', color: 'var(--c3)' }}>{p.score}</span>
              <span style={{ flex: '0 0 60px' }}>{p.maxLv}</span>
              <span style={{ flex: '0 0 60px' }}>{p.solved}</span>
              <span style={{ flex: '0 0 60px', color: 'var(--c2)' }}>{p.fails || 0}</span>
              <span style={{ flex: '0 0 60px', color: 'var(--c3)' }}>{p.hintsUsed || 0}</span>
              <span style={{ flex: '0 0 80px' }}>{p.cps}</span>
              <span style={{ flex: '0 0 100px', fontSize: '12px', color: p.status === 'active' ? 'var(--c1)' : (p.status === 'dead' || p.status === 'disqualified' ? 'var(--c2)' : 'var(--c5)'), fontWeight: 'bold' }}>
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
