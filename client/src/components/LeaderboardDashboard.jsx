import React from 'react';

const LeaderboardDashboard = ({ players, totalSouls, isFullScreen, onDisqualify }) => {
  const hasPlayers = players && players.length > 0;

  const getStatusLED = (status) => {
    let cls = "status-led ";
    if (status === 'active') cls += "led-active";
    else if (status === 'dead') cls += "led-dead";
    else if (status === 'won') cls += "led-won";
    else if (status === 'disqualified') cls += "led-disqualified";
    return <span className={cls}></span>;
  };

  return (
    <div className={isFullScreen ? "leaderboard-full" : "leaderboard-overlay"}>
      <div className="scanning-line"></div>
      
      <div className="leaderboard-title">
        {isFullScreen ? '--- CENTRAL CONTROL: ACTIVE SOULS ---' : '=== LIVE SOULS ==='}
      </div>
      
      <div style={{ fontSize: '14px', color: 'var(--c4)', textAlign: 'center', marginBottom: '15px', letterSpacing: '2px' }}>
        TOTAL CONSUMED: <span style={{ color: 'var(--c1)' }}>{totalSouls}</span>
      </div>
      
      {!hasPlayers && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--c2)', fontSize: '14px', letterSpacing: '2px', border: '1px dashed var(--d2)' }}>
          -- NO SOULS DETECTED IN THE CURRENT CYCLE --
        </div>
      )}
      
      {hasPlayers && (
        <div className="leaderboard-header" style={{ display: 'flex', color: 'var(--c4)', fontSize: '12px', paddingBottom: '10px', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px', opacity: 0.8 }}>
          <span style={{ flex: '0 0 60px' }}>RANK</span>
          <span style={{ flex: 1 }}>AGENT IDENTITY</span>
          {isFullScreen && (
            <>
              <span style={{ flex: '0 0 80px' }}>LVL</span>
              <span style={{ flex: '0 0 80px' }}>FAILS</span>
              <span style={{ flex: '0 0 80px' }}>HINTS</span>
              <span style={{ flex: '0 0 120px' }}>STATUS</span>
            </>
          )}
          {!isFullScreen && <span style={{ flex: '0 0 80px', textAlign: 'right' }}>LVL</span>}
          {onDisqualify && <span style={{ flex: '0 0 80px', textAlign: 'center' }}>ACTION</span>}
        </div>
      )}

      <div style={{ flex: 1, overflowY: 'auto', paddingRight: '5px' }}>
        {hasPlayers && players.slice(0, 100).map((p, idx) => {
          let cls = "leaderboard-item";
          if (idx === 0 && p.status === 'active') cls += " top";
          if (p.status === 'dead' || p.status === 'disqualified') cls += " dead";
          if (p.status === 'won') cls += " won";

          return (
            <div key={p.id} className={cls}>
              <span style={{ flex: '0 0 60px', color: 'var(--d1)', fontSize: '16px' }}>#{idx + 1}</span>
              
              <span style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                {getStatusLED(p.status)}
                <span style={{ 
                  color: (p.status === 'dead' || p.status === 'disqualified') ? 'var(--c2)' : 'var(--c1)', 
                  fontWeight: 'bold',
                  letterSpacing: '1px'
                }}>
                  {p.name.toUpperCase()}
                </span>
              </span>

              {isFullScreen ? (
                <>
                  <span style={{ flex: '0 0 80px', color: 'var(--c5)' }}>LV {p.maxLv}</span>
                  <span style={{ flex: '0 0 80px', color: 'var(--c2)' }}>{p.fails || 0}</span>
                  <span style={{ flex: '0 0 80px', color: 'var(--c3)' }}>{p.hintsUsed || 0}</span>
                  <span style={{ 
                    flex: '0 0 120px', 
                    fontSize: '12px', 
                    fontWeight: 'bold',
                    color: p.status === 'active' ? 'var(--c1)' : (p.status === 'dead' || p.status === 'disqualified' ? 'var(--c2)' : 'var(--c6)')
                  }}>
                    {p.status.toUpperCase()}
                  </span>
                </>
              ) : (
                <span style={{ flex: '0 0 80px', textAlign: 'right', color: 'var(--c5)' }}>LV {p.maxLv}</span>
              )}

              {onDisqualify && (
                <div style={{ flex: '0 0 80px', textAlign: 'center' }}>
                  <button 
                    onClick={() => onDisqualify(p.id)}
                    className="btn-r"
                    style={{ 
                      fontSize: '10px', 
                      padding: '2px 8px', 
                      background: 'transparent',
                      border: '1px solid var(--c2)',
                      cursor: 'pointer'
                    }}
                    disabled={p.status === 'disqualified'}
                  >
                    DQ
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderboardDashboard;
