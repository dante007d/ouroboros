import { useState } from 'react';

const ADMIN_ROWS = 150;

const LeaderboardDashboard = ({ players, totalSouls, total, online, isFullScreen, onDisqualify, meId }) => {
  const [filter, setFilter] = useState('');
  const [yearFilter, setYearFilter] = useState(0); // 0 = every year
  const hasPlayers = players && players.length > 0;

  // Keep each soul's true rank even when the admin filters the list.
  const needle = filter.trim().toUpperCase();
  const rows = (players || [])
    .map((p, idx) => ({ p, rank: idx + 1 }))
    .filter(({ p }) => !needle || p.name.toUpperCase().includes(needle))
    .filter(({ p }) => !yearFilter || p.year === yearFilter)
    .slice(0, isFullScreen ? ADMIN_ROWS : 100);

  const getStatusLED = (p) => {
    let cls = "status-led ";
    if (p.status === 'active') cls += p.online === false ? "led-offline" : "led-active";
    else if (p.status === 'dead') cls += "led-dead";
    else if (p.status === 'won') cls += "led-won";
    else if (p.status === 'disqualified') cls += "led-disqualified";
    return <span className={cls}></span>;
  };

  return (
    <div className={isFullScreen ? "leaderboard-full" : "leaderboard-overlay"}>
      <div className="scanning-line"></div>

      <div className="leaderboard-title">
        {isFullScreen ? '--- CENTRAL CONTROL: ACTIVE SOULS ---' : '=== LIVE SOULS ==='}
      </div>

      <div className="lb-meta">
        <span>TOTAL CONSUMED: <b className="c1">{totalSouls}</b></span>
        <span>IN THE CYCLE: <b className="c5">{total ?? players?.length ?? 0}</b></span>
        <span>CONNECTED: <b className="c1">{online ?? 0}</b></span>
      </div>

      {isFullScreen && (
        <div className="lb-tools">
          <input
            className="lb-filter"
            type="search"
            placeholder="FIND A SOUL BY NAME_"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
          <div className="lb-years" role="group" aria-label="Filter by year">
            {[0, 1, 2, 3, 4].map(y => (
              <button key={y} type="button" className={yearFilter === y ? 'on' : ''} onClick={() => setYearFilter(y)}>
                {y ? `YR ${y}` : 'ALL'}
              </button>
            ))}
          </div>
        </div>
      )}

      {!hasPlayers && (
        <div className="lb-empty">
          -- NO SOULS DETECTED IN THE CURRENT CYCLE --
        </div>
      )}

      {hasPlayers && (
        <div className="lb-scroll">
          <div className={`lb-table ${isFullScreen ? 'full' : ''}`}>
            <div className="leaderboard-header leaderboard-item">
              <span className="col-rank">RANK</span>
              <span className="col-name">AGENT IDENTITY</span>
              {isFullScreen && (
                <>
                  <span className="col-num">YEAR</span>
                  <span className="col-num">LVL</span>
                  <span className="col-num">SOLV</span>
                  <span className="col-time">TIME (S)</span>
                  <span className="col-num">FAIL</span>
                  <span className="col-num">HINT</span>
                  <span className="col-num">CPS</span>
                  <span className="col-num" title="Cheat strikes: pastes, copies, leaving mid-riddle">CHEAT</span>
                  <span className="col-status">STATUS</span>
                </>
              )}
              {!isFullScreen && <span className="col-lv">LVL</span>}
              {onDisqualify && <span className="col-act">ACTION</span>}
            </div>

            {rows.map(({ p, rank }) => {
              let cls = "leaderboard-item";
              if (rank === 1 && p.status === 'active') cls += " top";
              if (p.status === 'dead' || p.status === 'disqualified') cls += " dead";
              if (p.status === 'won') cls += " won";
              if (p.online === false) cls += " offline";
              if (meId && p.id === meId) cls += " me";

              return (
                <div key={p.id} className={cls}>
                  <span className="col-rank">#{rank}</span>

                  <span className="col-name">
                    {getStatusLED(p)}
                    <span className="lb-name">{p.name.toUpperCase()}</span>
                  </span>

                  {isFullScreen ? (
                    <>
                      <span className="col-num c4">{p.year ?? '-'}</span>
                      <span className="col-num c5">{p.maxLv}</span>
                      <span className="col-num c1">{p.solved || 0}</span>
                      <span className="col-time c4">{Number(p.time || 0).toFixed(3)}</span>
                      <span className="col-num c2">{p.fails || 0}</span>
                      <span className="col-num c3">{p.hintsUsed || 0}</span>
                      <span className="col-num c5">{p.cps || 0}</span>
                      <span className={`col-num ${p.cheats ? 'cheater' : 'dim'}`}>{p.cheats || 0}</span>
                      <span className={`col-status st-${p.status}`}>
                        {p.status.toUpperCase()}{p.online === false ? ' (OFF)' : ''}
                      </span>
                    </>
                  ) : (
                    <span className="col-lv c5">{p.maxLv}</span>
                  )}

                  {onDisqualify && (
                    <div className="col-act">
                      <button
                        type="button"
                        onClick={() => onDisqualify(p.id)}
                        className="dq-btn"
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
      )}

      {!isFullScreen && hasPlayers && total > players.length && (
        <div className="lb-more">+ {total - players.length} MORE SOULS BELOW. THE DEEP DOES NOT SHOW ITS BOTTOM.</div>
      )}
    </div>
  );
};

export default LeaderboardDashboard;
