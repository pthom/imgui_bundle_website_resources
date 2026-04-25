// Variation 2 — "Immediate Mode"
// Dark IDE-style. Explorer video plays in a faux app window in the hero.
// Dense, monospace-leaning, dev-tool energy.

const v2 = {
  bg: '#0d1117', // GitHub-dark-ish
  bgElev: '#161b22',
  bgInset: '#0a0d12',
  border: '#21262d',
  borderBright: '#30363d',
  ink: '#e6edf3',
  inkDim: '#8b949e',
  inkMuted: '#6e7681',
  // Pull accents from the imgui_bundle bird logo
  accent: '#fbd141', // bird yellow
  accent2: '#3fb950', // green parrot feather
  accent3: '#58a6ff', // ocean blue (also classic ImGui plot blue)
  red: '#ff7b72',
  sans: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace'
};

function V2TopBar() {
  return (
    <div style={{
      borderBottom: `1px solid ${v2.border}`,
      background: v2.bg,
      padding: '12px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: v2.sans, fontSize: 13, color: v2.ink
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="/" style={{
          display: 'flex', alignItems: 'center', gap: 12,
          textDecoration: 'none', color: v2.ink
        }}>
          <img src="assets/logo_imgui_bundle.png" alt="" style={{ width: 32, height: 32, borderRadius: '50%' }} />
          <span style={{
            fontFamily: v2.sans, fontWeight: 700,
            letterSpacing: '-0.015em', lineHeight: 1, fontSize: "20px"
          }}>
            <span style={{ color: v2.inkDim, fontWeight: 500 }}>Dear ImGui </span>Bundle
          </span>
        </a>
        <span style={{ color: v2.borderBright }}>·</span>
        <div style={{ display: 'flex', gap: 22, color: v2.inkDim }}>
          <a href="/doc/" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</a>
          <a href="/explorer/" style={{ color: 'inherit', textDecoration: 'none' }}>Explorer</a>
          <a href="/playground/" style={{ color: 'inherit', textDecoration: 'none' }}>Playground</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <a href="https://github.com/pthom/imgui_bundle" style={{
          color: v2.ink, textDecoration: 'none', fontSize: 13,
          display: 'flex', alignItems: 'center', gap: 6
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg>
          Source
        </a>
      </div>
    </div>);

}

function V2StatusBar() {
  return (
    <div style={{
      borderTop: `1px solid ${v2.border}`,
      background: v2.bgInset,
      padding: '6px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: v2.mono, fontSize: 11, color: v2.inkMuted
    }}>
      <div style={{ display: 'flex', gap: 18 }}>
        <span><span style={{ color: v2.accent2 }}>●</span> ready</span>
        <span>main</span>
        <span>python.· c++</span>
      </div>
      <div style={{ display: 'flex', gap: 18 }}>
        <span>desktop · mobile · web |</span>
        <span>120 FPS |</span>
        <span>GPU rendering</span>
      </div>
    </div>);

}

function V2Hero() {
  // Two-column: left is "terminal" with poetry; right is the explorer video
  // in a faux ImGui window with tabs.
  return (
    <section style={{
      padding: '72px 32px 32px',
      borderBottom: `1px solid ${v2.border}`
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 56, alignItems: 'center' }}>
        {/* Left */}
        <div>
          <div style={{
            fontFamily: v2.mono, fontSize: 12, color: v2.accent2,
            marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10
          }}>
            <span style={{ opacity: 0.6 }}>{'>'}</span>
            <span>Dear ImGui Bundle: immediate-mode GUIs for python & c++</span>
            <span style={{
              display: 'inline-block', width: 7, height: 14,
              background: v2.accent2, animation: 'v2blink 1s steps(2) infinite'
            }} />
          </div>
          <h1 style={{
            fontFamily: v2.sans, lineHeight: 1.0, fontWeight: 700,
            letterSpacing: '-0.035em', color: v2.ink, margin: 0, fontSize: "40px"
          }}>
            Stop fighting<br />
            GUI frameworks.<br />
            <span style={{ color: v2.accent }}>Start building.</span>
          </h1>
          <p style={{
            fontFamily: v2.sans, fontSize: 18, lineHeight: 1.55,
            color: v2.inkDim, margin: '28px 0 0', maxWidth: 520
          }}>
            Interactive Python &amp; C++ apps for desktop, mobile, and web —
            powered by <span style={{ color: v2.ink }}>Dear ImGui</span>.
            Code that maps to behavior, one line at a time.
          </p>

          {/* Install row */}
          <div style={{ marginTop: 36, display: 'flex', gap: 12, alignItems: 'stretch' }}>
            <div style={{
              flex: 1,
              background: v2.bgElev, border: `1px solid ${v2.borderBright}`,
              borderRadius: 8, padding: '14px 18px',
              fontFamily: v2.mono, fontSize: 14, color: v2.ink,
              display: 'flex', alignItems: 'center', gap: 10
            }}>
              <span style={{ color: v2.accent3 }}>$</span>
              <span><span style={{ color: v2.inkDim }}>pip install</span> imgui-bundle</span>
              <span style={{ flex: 1 }} />
              <span style={{ color: v2.inkMuted, fontSize: 12 }}>copy</span>
            </div>
            <a href="/playground/" style={{
              background: v2.accent, color: '#0d1117',
              padding: '14px 22px', borderRadius: 8,
              fontFamily: v2.sans, fontSize: 14, fontWeight: 600,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8
            }}>
              Try in Playground →
            </a>
          </div>

          {/* compat strip */}
          <div style={{
            marginTop: 28, display: 'flex', gap: 24,
            fontFamily: v2.mono, fontSize: 11, color: v2.inkMuted,
            textTransform: 'uppercase', letterSpacing: '0.12em'
          }}>
            <span>✓ Windows</span>
            <span>✓ macOS</span>
            <span>✓ Linux</span>
            <span>✓ iOS</span>
            <span>✓ Android</span>
            <span>✓ WebAssembly</span>
            <span>✓ Pyodide</span>
          </div>
        </div>

        {/* Right — ImGui-style window with the explorer video */}
        <V2ExplorerWindow />
      </div>
    </section>);

}

function V2ExplorerWindow() {
  const tabs = ['Intro', 'Dear ImGui', 'Demo Apps', 'Visualization', 'Widgets', 'Tools'];
  const [active, setActive] = React.useState(1);
  return (
    <div style={{
      background: '#1e1e1e',
      border: `1px solid ${v2.borderBright}`,
      borderRadius: 8, overflow: 'hidden',
      boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)'
    }}>
      {/* Window chrome */}
      <div style={{
        background: '#2a2a2a', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
        borderBottom: '1px solid #1a1a1a'
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f' }} />
        <span style={{
          marginLeft: 14, fontFamily: v2.mono, fontSize: 11, color: '#bbb'
        }}>Dear ImGui Bundle Explorer</span>
      </div>
      {/* Tab strip — ImGui style */}
      <div style={{
        background: '#1e1e1e', padding: '6px 8px 0',
        display: 'flex', gap: 2, borderBottom: '1px solid #0a0a0a'
      }}>
        {tabs.map((t, i) =>
        <div key={t} onClick={() => setActive(i)} style={{
          fontFamily: v2.mono, fontSize: 11.5,
          padding: '6px 14px',
          background: active === i ? '#3a4d6e' : '#252525',
          color: active === i ? '#fff' : '#bbb',
          border: '1px solid ' + (active === i ? '#5a6d8e' : '#1a1a1a'),
          borderBottom: 'none',
          borderRadius: '4px 4px 0 0',
          cursor: 'pointer'
        }}>{t} {active === i && <span style={{ marginLeft: 6, opacity: 0.6 }}>×</span>}</div>
        )}
      </div>
      {/* Video area */}
      <div style={{ position: 'relative', background: '#0a0a0a' }}>
        <video src="assets/explorer.mp4"
        autoPlay loop muted playsInline
        style={{ width: '100%', display: 'block', aspectRatio: '16 / 9', objectFit: 'cover' }} />
        
        {/* Faux ImGui status bar */}
        <div style={{
          background: '#252525', borderTop: '1px solid #0a0a0a',
          padding: '5px 12px', fontFamily: v2.mono, fontSize: 10.5, color: '#888',
          display: 'flex', justifyContent: 'space-between'
        }}>
          <span>Font scale: 1.000  |  Dear ImGui Bundle Explorer · v1.92.700</span>
          <span>Enable idling  ☐  FPS: 120.0</span>
        </div>
      </div>
    </div>);

}

function V2Pillars() {
  // Three pillars rendered as terminal-style "modules"
  const pillars = [
  {
    cmd: 'open --doc',
    title: 'Documentation',
    desc: 'What it is, how to start, full API references for every library in the bundle.',
    meta: '/doc/  ·  Markdown · MyST',
    href: '/doc/',
    color: v2.accent3
  },
  {
    cmd: 'open --explorer',
    title: 'Interactive Explorer',
    desc: 'Browse demos, see the source, try every widget. The reference manual that runs.',
    meta: '/explorer/  ·  WebAssembly',
    href: '/explorer/',
    color: v2.accent
  },
  {
    cmd: 'open --playground',
    title: 'Python Playground',
    desc: 'Live Python sandbox with ready-to-run demos. Edit the code, see results instantly.',
    meta: '/playground/  ·  Pyodide',
    href: '/playground/',
    color: v2.accent2
  }];

  return (
    <section style={{ padding: '72px 32px', borderBottom: `1px solid ${v2.border}` }}>
      <div style={{
        fontFamily: v2.mono, fontSize: 12, color: v2.inkMuted,
        marginBottom: 14, letterSpacing: '0.1em', textTransform: 'uppercase'
      }}>START HERE</div>
      <h2 style={{
        fontFamily: v2.sans, fontSize: 40, fontWeight: 700,
        color: v2.ink, margin: '0 0 48px', letterSpacing: '-0.02em'
      }}>Three ways in.</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {pillars.map((p) =>
        <a key={p.cmd} href={p.href} style={{
          background: v2.bgElev, border: `1px solid ${v2.border}`,
          borderRadius: 10, padding: '24px 24px 28px',
          textDecoration: 'none', color: 'inherit',
          display: 'block', transition: 'border-color .15s, transform .15s',
          position: 'relative', overflow: 'hidden'
        }}
        onMouseEnter={(e) => {e.currentTarget.style.borderColor = p.color;}}
        onMouseLeave={(e) => {e.currentTarget.style.borderColor = v2.border;}}>
          
            <div style={{
            fontFamily: v2.mono, fontSize: 12, color: p.color, marginBottom: 18
          }}>
              <span style={{ color: v2.inkMuted }}>$ </span>{p.cmd}
            </div>
            <h3 style={{
            fontFamily: v2.sans, fontSize: 24, fontWeight: 600,
            color: v2.ink, margin: '0 0 10px', letterSpacing: '-0.01em'
          }}>{p.title}</h3>
            <p style={{
            fontFamily: v2.sans, fontSize: 14, lineHeight: 1.55,
            color: v2.inkDim, margin: '0 0 22px'
          }}>{p.desc}</p>
            <div style={{
            fontFamily: v2.mono, fontSize: 11, color: v2.inkMuted,
            paddingTop: 14, borderTop: `1px dashed ${v2.border}`,
            display: 'flex', justifyContent: 'space-between'
          }}>
              <span>{p.meta}</span>
              <span style={{ color: p.color }}>→</span>
            </div>
          </a>
        )}
      </div>
    </section>);

}

function V2FruitPickerWindow() {
  return (
    <div style={{
      borderRadius: 8, overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
      background: '#1f1f1f', width: 240
    }}>
      <div style={{
        background: '#2a2a2a', padding: '7px 11px',
        display: 'flex', alignItems: 'center', gap: 6,
        borderBottom: '1px solid #1a1a1a'
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
        <span style={{ marginLeft: 12, fontFamily: v2.sans, fontSize: 11.5, color: '#ddd' }}>
          Fruit Picker
        </span>
      </div>
      <div style={{ padding: '12px 14px', fontFamily: v2.sans, fontSize: 13, color: '#e0e0e0' }}>
        <div style={{ marginBottom: 6 }}>Choose a fruit:</div>
        <div style={{
          background: '#2a2a2a', border: '1px solid #3a3a3a',
          padding: '4px 0'
        }}>
          <div style={{ padding: '3px 8px', background: '#3a4d6e', color: '#fff' }}>Apple</div>
          <div style={{ padding: '3px 8px' }}>Banana</div>
          <div style={{ padding: '3px 8px' }}>Cherry</div>
        </div>
        <div style={{ marginTop: 8, fontSize: 12 }}>You selected: Apple</div>
      </div>
    </div>);

}

function V2Philosophy() {
  // The 9-line code example with annotations
  const code = `from imgui_bundle import imgui, hello_imgui

selected_idx = 0
items = ["Apple", "Banana", "Cherry"]

def gui():
    global selected_idx
    imgui.text("Choose a fruit:")
    _, selected_idx = imgui.list_box("##fruits", selected_idx, items)
    imgui.text(f"You selected: {items[selected_idx]}")

hello_imgui.run(gui, window_title="Fruit Picker")`;

  const highlight = (src) =>
  src.
  replace(/(".*?")/g, '⟨S⟩$1⟨/S⟩').
  replace(/\b(from|import|def|global)\b/g, '⟨K⟩$1⟨/K⟩').
  replace(/\b(0)\b/g, '⟨N⟩$1⟨/N⟩').
  replace(/(#.+)/g, '⟨C⟩$1⟨/C⟩');

  const colorMap = { S: '#a5d6ff', K: '#ff7b72', N: '#79c0ff', C: '#8b949e' };
  const renderCode = (src) => {
    const parts = highlight(src).split(/(⟨[A-Z]⟩|⟨\/[A-Z]⟩)/);
    let cls = null;
    return parts.map((p, i) => {
      if (/⟨[A-Z]⟩/.test(p)) {cls = p[1];return null;}
      if (/⟨\/[A-Z]⟩/.test(p)) {cls = null;return null;}
      return <span key={i} style={{ color: cls ? colorMap[cls] : v2.ink }}>{p}</span>;
    });
  };

  return (
    <section style={{ padding: '72px 32px', background: v2.bgInset, borderBottom: `1px solid ${v2.border}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <div style={{
            fontFamily: v2.mono, fontSize: 12, color: v2.accent,
            marginBottom: 14, letterSpacing: '0.1em', textTransform: 'uppercase'
          }}>// philosophy</div>
          <h2 style={{
            fontFamily: v2.sans, fontSize: 44, fontWeight: 700,
            color: v2.ink, margin: '0 0 24px', letterSpacing: '-0.025em', lineHeight: 1.05
          }}>
            Code that<br />reads like a book.
          </h2>
          <p style={{
            fontFamily: v2.sans, fontSize: 17, lineHeight: 1.6,
            color: v2.inkDim, margin: '0 0 16px'
          }}>
            Immediate mode means your UI code is the UI. No widget trees,
            no callbacks, no implicit state.
          </p>
          <p style={{
            fontFamily: v2.sans, fontSize: 17, lineHeight: 1.6,
            color: v2.inkDim, margin: 0
          }}>
            In the age of generated code, brain time is the scarce resource.
            Readability wins.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            background: '#0a0d12', border: `1px solid ${v2.borderBright}`,
            borderRadius: 10, overflow: 'hidden',
            boxShadow: '0 20px 60px -20px rgba(0,0,0,0.6)'
          }}>
            <div style={{
              background: v2.bgElev, padding: '8px 14px',
              borderBottom: `1px solid ${v2.border}`,
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: v2.mono, fontSize: 11, color: v2.inkDim
            }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f56' }} />
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e' }} />
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#27c93f' }} />
              <span style={{ marginLeft: 10 }}>fruit_picker.py</span>
              <span style={{ flex: 1 }} />
              <span>9 lines</span>
            </div>
            <pre style={{
              margin: 0, padding: '20px 24px',
              fontFamily: v2.mono, fontSize: 13, lineHeight: 1.7,
              color: v2.ink, whiteSpace: 'pre'
            }}>{renderCode(code)}</pre>
          </div>

          {/* Resulting app — like a footnote illustration, with margin label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 24,
            marginTop: 28, marginLeft: 80
          }}>
            <V2FruitPickerWindow />
            <div style={{
              flex: 1, display: 'flex', alignItems: 'center', gap: 14
            }}>
              <div style={{
                width: 40, height: 1, background: v2.borderBright
              }} />
              <div style={{
                fontFamily: v2.mono, fontSize: 11.5,
                color: v2.inkDim, letterSpacing: '0.06em',
                lineHeight: 1.5
              }}>
                <span style={{ color: v2.accent2 }}>// </span>
                the resulting app,<br />running natively
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function V2Ecosystem() {
  // Stack/diagram view: shows how the libraries relate.
  // litgen → bundle (bindings); hello_imgui (engine); fiatlight (built on top)
  return (
    <section style={{ padding: '72px 32px', borderBottom: `1px solid ${v2.border}` }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48
      }}>
        <h2 style={{
          fontFamily: v2.sans, fontSize: 40, fontWeight: 700,
          color: v2.ink, margin: 0, letterSpacing: '-0.02em'
        }}>The ecosystem.</h2>
        <span style={{ fontFamily: v2.mono, fontSize: 12, color: v2.inkMuted }}>
          // four libraries · one philosophy
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
        {
          logo: 'assets/logo_hello_imgui.png',
          name: 'Hello ImGui',
          tag: 'Dear ImGui apps made simple — desktop, mobile, web from one codebase.',
          sub: 'Minimal code. Maximally readable.',
          href: 'https://pthom.github.io/hello_imgui/',
          github: 'https://github.com/pthom/hello_imgui',
          color: v2.accent3,
          role: 'engine'
        },
        {
          logo: 'assets/logo_fiatlight.jpg',
          name: 'fiatlight',
          tag: 'Turn Python functions into interactive apps in one line.',
          sub: 'Visual pipelines. Persistent state. Zero UI code.',
          href: 'https://pthom.github.io/fiatlight/',
          github: 'https://github.com/pthom/fiatlight',
          color: v2.accent,
          role: 'built on top'
        },
        {
          logo: 'assets/logo_litgen.png',
          name: 'litgen',
          tag: 'Automatic Python bindings for C++ — readable and discoverable.',
          sub: 'Battle-tested on 20+ libraries.',
          href: 'https://pthom.github.io/litgen/',
          github: 'https://github.com/pthom/litgen',
          color: v2.accent2,
          role: 'binding generator'
        }].
        map((it) =>
        <a key={it.name} href={it.href} target="_blank" rel="noopener" className="v2-eco-card" style={{
          background: v2.bgElev, border: `1px solid ${v2.border}`,
          borderRadius: 10, padding: 22,
          textDecoration: 'none', color: 'inherit',
          display: 'flex', flexDirection: 'column', gap: 16,
          transition: 'border-color .15s'
        }}
        onMouseEnter={(e) => {e.currentTarget.style.borderColor = it.color;}}
        onMouseLeave={(e) => {e.currentTarget.style.borderColor = v2.border;}}>
          
            <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
              <div style={{
              width: 56, height: 56, borderRadius: 10,
              background: '#0a0d12', border: `1px solid ${v2.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden'
            }}>
                <img src={it.logo} alt="" className="v2-eco-logo" style={{
                width: 44, height: 44, objectFit: 'contain',
                filter: 'saturate(0.35) brightness(0.9)',
                transition: 'filter .25s ease'
              }} />
              </div>
              <span style={{
              fontFamily: v2.mono, fontSize: 10.5, color: it.color,
              background: it.color + '15', padding: '4px 10px', borderRadius: 999,
              border: `1px solid ${it.color}33`,
              textTransform: 'uppercase', letterSpacing: '0.08em'
            }}>{it.role}</span>
            </div>
            <div>
              <h3 style={{
              fontFamily: v2.sans, fontSize: 22, fontWeight: 600,
              color: v2.ink, margin: '0 0 8px'
            }}>{it.name}</h3>
              <p style={{
              fontFamily: v2.sans, fontSize: 14, lineHeight: 1.55,
              color: v2.inkDim, margin: '0 0 8px'
            }}>{it.tag}</p>
              <p style={{
              fontFamily: v2.sans, fontSize: 13, lineHeight: 1.5,
              color: v2.inkMuted, margin: 0, fontStyle: 'italic'
            }}>{it.sub}</p>
            </div>
            <div style={{
            fontFamily: v2.mono, fontSize: 11, color: it.color,
            marginTop: 'auto', paddingTop: 14,
            borderTop: `1px dashed ${v2.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
              <span>$ open documentation →</span>
              <span
              role="link"
              title={`${it.name} on GitHub`}
              onClick={(e) => {e.preventDefault();e.stopPropagation();window.open(it.github, '_blank');}}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: v2.inkDim, cursor: 'pointer',
                padding: '2px 6px', borderRadius: 4,
                transition: 'color .15s, background .15s'
              }}
              onMouseEnter={(e) => {e.currentTarget.style.color = v2.ink;e.currentTarget.style.background = v2.bg;}}
              onMouseLeave={(e) => {e.currentTarget.style.color = v2.inkDim;e.currentTarget.style.background = 'transparent';}}>
              
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg>
                <span style={{ fontSize: 10.5 }}>repo</span>
              </span>
            </div>
          </a>
        )}
      </div>
    </section>);

}

function V2Footer() {
  return (
    <footer style={{ padding: '56px 32px 32px', background: v2.bgInset }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 40, marginBottom: 40, paddingBottom: 32,
        borderBottom: `1px solid ${v2.border}`
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <img src="assets/logo_imgui_bundle.png" alt="" style={{ width: 32, height: 32, borderRadius: '50%' }} />
            <span style={{
              fontFamily: v2.sans, fontSize: 16, fontWeight: 600, color: v2.ink
            }}>Dear ImGui Bundle</span>
          </div>
          <p style={{
            fontFamily: v2.sans, fontSize: 14, lineHeight: 1.5,
            color: v2.inkDim, margin: 0, maxWidth: 360
          }}>
            Empower humans. Let them express their creativity.
            Brain time is the scarce resource.
          </p>
        </div>
        {[
        { title: 'Bundle', items: [['Docs', '/doc/'], ['Explorer', '/explorer/'], ['Playground', '/playground/']] },
        { title: 'Community', items: [['GitHub', 'https://github.com/pthom/imgui_bundle'], ['Discord', 'https://discord.gg/xkzpKMeYN3'], ['DeepWiki', 'https://deepwiki.com/pthom/imgui_bundle']] },
        { title: 'Read', items: [['Blog', 'https://code-ballads.net/'], ['PyPI', 'https://pypi.org/project/imgui-bundle/'], ['Conda', '#']] }].
        map((col) =>
        <div key={col.title}>
            <div style={{
            fontFamily: v2.mono, fontSize: 11, color: v2.inkMuted,
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14
          }}>{col.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.items.map(([label, href]) =>
            <a key={label} href={href} style={{
              fontFamily: v2.sans, fontSize: 14, color: v2.ink,
              textDecoration: 'none'
            }}>{label}</a>
            )}
            </div>
          </div>
        )}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: v2.mono, fontSize: 11, color: v2.inkMuted
      }}>
        <span>© Pascal Thomet · MIT licensed · imgui-bundle.pages.dev</span>
        <span>Made with care &amp; immediate mode</span>
      </div>
    </footer>);

}

function V2BuiltOnImGui() {
  // "Built on Dear ImGui" — credits and positions the bundle relative to the upstream library.
  return (
    <section style={{
      padding: '56px 32px',
      borderBottom: `1px solid ${v2.border}`,
      background: v2.bg
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56, alignItems: 'center'
      }}>
        <div>
          <div style={{
            fontFamily: v2.mono, fontSize: 12, color: v2.accent3,
            marginBottom: 14, letterSpacing: '0.1em', textTransform: 'uppercase'
          }}>// foundation</div>
          <h2 style={{
            fontFamily: v2.sans, fontSize: 36, fontWeight: 700,
            color: v2.ink, margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.05
          }}>
            Built on <span style={{ color: v2.accent3 }}>Dear ImGui</span>.
          </h2>
          <p style={{
            fontFamily: v2.sans, fontSize: 15, lineHeight: 1.6,
            color: v2.inkDim, margin: 0
          }}>
            The bundle wraps and extends the legendary immediate-mode GUI
            library used in games, tools and engines worldwide.
          </p>
        </div>
        <div style={{
          background: v2.bgElev, border: `1px solid ${v2.border}`,
          borderRadius: 10, padding: '24px 28px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32
        }}>
          {[
          ['65k+', 'GitHub stars'],
          ['10+ yrs', 'In production'],
          ['Games · DCC · Tools', 'Used everywhere'],
          ['MIT', 'Permissive']].
          map(([n, l]) =>
          <div key={l}>
              <div style={{
              fontFamily: v2.sans, fontSize: 22, fontWeight: 700,
              color: v2.ink, letterSpacing: '-0.01em'
            }}>{n}</div>
              <div style={{
              fontFamily: v2.mono, fontSize: 11, color: v2.inkMuted,
              marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>{l}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function V2Applications() {
  // "A wide range of applications" — the things you can build, drawn from
  // what the explorer demonstrates.
  const apps = [
  {
    title: 'Interactive 2D & 3D plots',
    desc: 'ImPlot and ImPlot3D — rotatable, zoomable, real-time. Stock prices, signals, scientific data.',
    tag: 'implot & implot3d',
    color: v2.accent3,
    icon:
    <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="2,30 12,18 22,24 32,8 42,16 58,4" />
          <polyline points="2,36 12,28 22,32 32,22 42,26 58,18" opacity="0.5" />
          <line x1="2" y1="38" x2="58" y2="38" strokeWidth="0.5" />
        </svg>

  },
  {
    title: 'GPU-accelerated rendering',
    desc: 'Render directly on the GPU. Blend custom shaders and 3D content into your UI at 120 FPS.',
    tag: 'shaders',
    color: v2.accent,
    icon:
    <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2,28 Q15,18 30,24 T58,16" />
          <path d="M2,34 Q15,26 30,30 T58,24" opacity="0.6" />
          <path d="M2,22 Q15,12 30,18 T58,10" opacity="0.4" />
        </svg>

  },
  {
    title: 'Image analysis',
    desc: 'ImmVision — display, debug and inspect RGB and float images. Zoom, pan, pixel inspection, colormaps.',
    tag: 'immvision',
    color: v2.accent2,
    icon:
    <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="8" width="20" height="24" />
          <circle cx="14" cy="16" r="2.5" />
          <path d="M6,28 L12,22 L18,26 L26,18" />
          <rect x="34" y="8" width="20" height="24" />
          <circle cx="44" cy="20" r="6" strokeDasharray="2 2" />
        </svg>

  },
  {
    title: 'Visual node editors',
    desc: 'Explore ideas in graph form — connect functions, see data flow, build pipelines visually.',
    tag: 'imgui-node-editor',
    color: '#c084fc',
    icon:
    <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="14" width="14" height="12" rx="1" />
          <rect x="24" y="6" width="14" height="12" rx="1" />
          <rect x="24" y="22" width="14" height="12" rx="1" />
          <rect x="46" y="14" width="12" height="12" rx="1" />
          <path d="M16,20 Q20,12 24,12" />
          <path d="M16,20 Q20,28 24,28" />
          <path d="M38,12 Q42,16 46,20" />
          <path d="M38,28 Q42,24 46,20" />
        </svg>

  },
  {
    title: 'Markdown documentation',
    desc: 'Rich docs rendered inline — headings, links, code blocks, images. Documentation that lives with the app.',
    tag: 'imgui-md',
    color: '#f472b6',
    icon:
    <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="6" y1="10" x2="42" y2="10" />
          <line x1="6" y1="16" x2="54" y2="16" strokeWidth="0.8" />
          <line x1="6" y1="20" x2="48" y2="20" strokeWidth="0.8" />
          <line x1="6" y1="24" x2="54" y2="24" strokeWidth="0.8" />
          <line x1="6" y1="28" x2="36" y2="28" strokeWidth="0.8" />
          <rect x="6" y="32" width="22" height="2" />
        </svg>

  },
  {
    title: 'Feature-rich widgets',
    desc: 'Knobs, command palettes, toggles, file dialogs, gizmos, color editors — batteries included.',
    tag: 'add-ons',
    color: v2.red,
    icon:
    <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="14" cy="20" r="9" />
          <line x1="14" y1="13" x2="14" y2="17" />
          <rect x="32" y="12" width="22" height="6" rx="3" />
          <circle cx="38" cy="15" r="2" fill="currentColor" />
          <rect x="32" y="24" width="22" height="6" rx="3" />
          <circle cx="48" cy="27" r="2" fill="currentColor" />
        </svg>

  }];

  return (
    <section style={{
      padding: '72px 32px',
      borderBottom: `1px solid ${v2.border}`
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 48
      }}>
        <div>
          <div style={{
            fontFamily: v2.mono, fontSize: 12, color: v2.inkMuted,
            marginBottom: 14, letterSpacing: '0.1em', textTransform: 'uppercase'
          }}># capabilities</div>
          <h2 style={{
            fontFamily: v2.sans, fontSize: 40, fontWeight: 700,
            color: v2.ink, margin: 0, letterSpacing: '-0.02em'
          }}>A wide range of applications.</h2>
        </div>
        <span style={{
          fontFamily: v2.sans, fontSize: 14, color: v2.inkDim, maxWidth: 360, textAlign: 'right'
        }}>


        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {apps.map((a) =>
        <div key={a.title} style={{
          background: v2.bgElev, border: `1px solid ${v2.border}`,
          borderRadius: 10, padding: '24px 24px 22px',
          display: 'flex', flexDirection: 'column', gap: 14
        }}>
            <div style={{
            width: 60, height: 40, color: a.color
          }}>{a.icon}</div>
            <div>
              <h3 style={{
              fontFamily: v2.sans, fontSize: 18, fontWeight: 600,
              color: v2.ink, margin: '0 0 8px', letterSpacing: '-0.01em'
            }}>{a.title}</h3>
              <p style={{
              fontFamily: v2.sans, fontSize: 13.5, lineHeight: 1.55,
              color: v2.inkDim, margin: 0
            }}>{a.desc}</p>
            </div>
            <div style={{
            fontFamily: v2.mono, fontSize: 10.5, color: a.color,
            marginTop: 'auto', paddingTop: 10,
            borderTop: `1px dashed ${v2.border}`,
            letterSpacing: '0.08em'
          }}>// {a.tag}</div>
          </div>
        )}
      </div>
    </section>);

}

function V2Notebook() {
  // Simple link out to the author's notebook.
  return (
    <section style={{
      padding: '48px 32px',
      borderBottom: `1px solid ${v2.border}`,
      background: v2.bgInset
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        gap: 24, flexWrap: 'wrap'
      }}>
        <div style={{
          fontFamily: v2.mono, fontSize: 12, color: v2.inkMuted,
          letterSpacing: '0.1em', textTransform: 'uppercase'
        }}>// notebook</div>
        <a href="https://code-ballads.net/" style={{
          fontFamily: v2.mono, fontSize: 13, color: v2.accent,
          textDecoration: 'none',
          borderBottom: `1px solid ${v2.accent}`, paddingBottom: 3
        }}>code-ballads.net</a>
      </div>
    </section>);

}

function V2Landing() {
  return (
    <div style={{
      width: 1280, background: v2.bg, color: v2.ink,
      fontFamily: v2.sans
    }}>
      <style>{`
        @keyframes v2blink { 50% { opacity: 0; } }
        .v2-eco-card:hover .v2-eco-logo { filter: saturate(1) brightness(1.05) !important; }
      `}</style>
      <V2TopBar />
      <V2StatusBar />
      <V2Hero />
      <V2Pillars />
      <V2Philosophy />
      <V2BuiltOnImGui />
      <V2Ecosystem />
      <V2Applications />
      <V2Notebook />
      <V2Footer />
    </div>);

}

window.V2Landing = V2Landing;