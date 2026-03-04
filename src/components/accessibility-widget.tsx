'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { X, RotateCcw, Accessibility, Eye, Type, MousePointer2, Monitor } from 'lucide-react'

interface A11yState {
  textSize: number
  lineHeight: number
  letterSpacing: number
  wordSpacing: number
  dyslexiaFont: boolean
  readableFont: boolean
  textAlign: '' | 'left' | 'center' | 'right'
  highContrast: boolean
  darkMode: boolean
  lightMode: boolean
  invertColors: boolean
  monochrome: boolean
  lowSaturation: boolean
  highSaturation: boolean
  highlightLinks: boolean
  highlightHeadings: boolean
  bigCursor: boolean
  readingGuide: boolean
  focusHighlight: boolean
  hideImages: boolean
  stopAnimations: boolean
  tooltips: boolean
}

const defaultState: A11yState = {
  textSize: 0,
  lineHeight: 0,
  letterSpacing: 0,
  wordSpacing: 0,
  dyslexiaFont: false,
  readableFont: false,
  textAlign: '',
  highContrast: false,
  darkMode: false,
  lightMode: false,
  invertColors: false,
  monochrome: false,
  lowSaturation: false,
  highSaturation: false,
  highlightLinks: false,
  highlightHeadings: false,
  bigCursor: false,
  readingGuide: false,
  focusHighlight: false,
  hideImages: false,
  stopAnimations: false,
  tooltips: false,
}

const STORAGE_KEY = 'a11y-widget-state'

function loadState(): A11yState {
  if (typeof window === 'undefined') return defaultState
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return { ...defaultState, ...JSON.parse(saved) }
  } catch {}
  return defaultState
}

function saveState(state: A11yState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {}
}

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'profiles' | 'content' | 'color' | 'navigation'>('profiles')
  const [state, setState] = useState<A11yState>(defaultState)
  const [showStatement, setShowStatement] = useState(false)
  const guideRef = useRef<HTMLDivElement | null>(null)
  const styleRef = useRef<HTMLStyleElement | null>(null)
  const initialized = useRef(false)

  // Load saved state on mount
  useEffect(() => {
    if (!initialized.current) {
      setState(loadState())
      initialized.current = true
    }
  }, [])

  // Apply all styles
  useEffect(() => {
    if (!initialized.current) return

    saveState(state)

    if (!styleRef.current) {
      styleRef.current = document.createElement('style')
      styleRef.current.id = 'a11y-widget-styles'
      document.head.appendChild(styleRef.current)
    }

    const rules: string[] = []
    const html = document.documentElement
    const body = document.body

    // Text size
    if (state.textSize !== 0) {
      const scale = 1 + state.textSize * 0.1
      rules.push(`html { font-size: ${scale * 100}% !important; }`)
    }

    // Line height
    if (state.lineHeight !== 0) {
      const lh = 1.6 + state.lineHeight * 0.3
      rules.push(`body, body * { line-height: ${lh} !important; }`)
    }

    // Letter spacing
    if (state.letterSpacing !== 0) {
      rules.push(`body, body * { letter-spacing: ${state.letterSpacing * 0.5}px !important; }`)
    }

    // Word spacing
    if (state.wordSpacing !== 0) {
      rules.push(`body, body * { word-spacing: ${state.wordSpacing * 2}px !important; }`)
    }

    // Dyslexia font
    if (state.dyslexiaFont) {
      rules.push(`body, body * { font-family: 'OpenDyslexic', 'Comic Sans MS', cursive, sans-serif !important; }`)
    }

    // Readable font
    if (state.readableFont) {
      rules.push(`body, body * { font-family: Georgia, 'Times New Roman', serif !important; }`)
    }

    // Text align
    if (state.textAlign) {
      rules.push(`body p, body li, body span, body div { text-align: ${state.textAlign} !important; }`)
    }

    // High contrast
    if (state.highContrast) {
      rules.push(`body { filter: contrast(1.5) !important; }`)
    }

    // Dark mode
    if (state.darkMode) {
      rules.push(`
        html { filter: invert(1) hue-rotate(180deg) !important; }
        html img, html video, html canvas, html svg image,
        html [style*="background-image"] { filter: invert(1) hue-rotate(180deg) !important; }
      `)
    }

    // Light mode
    if (state.lightMode) {
      rules.push(`
        body { background-color: #fff !important; color: #000 !important; }
        body * { background-color: transparent !important; color: #000 !important; border-color: #ccc !important; }
        body a { color: #0000EE !important; }
      `)
    }

    // Invert colors
    if (state.invertColors) {
      rules.push(`html { filter: invert(1) !important; }`)
    }

    // Monochrome
    if (state.monochrome) {
      rules.push(`html { filter: grayscale(1) !important; }`)
    }

    // Low saturation
    if (state.lowSaturation) {
      rules.push(`html { filter: saturate(0.5) !important; }`)
    }

    // High saturation
    if (state.highSaturation) {
      rules.push(`html { filter: saturate(2) !important; }`)
    }

    // Highlight links
    if (state.highlightLinks) {
      rules.push(`a, a * { outline: 3px solid #FFD700 !important; background-color: rgba(255, 215, 0, 0.15) !important; }`)
    }

    // Highlight headings
    if (state.highlightHeadings) {
      rules.push(`h1, h2, h3, h4, h5, h6 { outline: 3px solid #00BFFF !important; background-color: rgba(0, 191, 255, 0.1) !important; }`)
    }

    // Big cursor
    if (state.bigCursor) {
      rules.push(`* { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='black' stroke='white' stroke-width='1' d='M5 3l14 8-6 2 4 8-3 1-4-8-5 4z'/%3E%3C/svg%3E") 4 2, auto !important; }`)
    }

    // Focus highlight
    if (state.focusHighlight) {
      rules.push(`*:focus { outline: 4px solid #FF6600 !important; outline-offset: 2px !important; box-shadow: 0 0 0 6px rgba(255, 102, 0, 0.3) !important; }`)
    }

    // Hide images
    if (state.hideImages) {
      rules.push(`img, svg, video, [role="img"] { opacity: 0.05 !important; }`)
    }

    // Stop animations
    if (state.stopAnimations) {
      rules.push(`*, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }`)
    }

    // Tooltips
    if (state.tooltips) {
      rules.push(`
        [title]:hover::after, [aria-label]:hover::after {
          content: attr(title) attr(aria-label);
          position: absolute; z-index: 99999;
          background: #333; color: #fff;
          padding: 4px 8px; border-radius: 4px;
          font-size: 14px; white-space: nowrap;
          pointer-events: none;
        }
        [title], [aria-label] { position: relative; }
      `)
    }

    // Exclude the widget itself from most overrides
    rules.push(`
      #a11y-widget, #a11y-widget *, #a11y-trigger, #a11y-trigger *,
      #a11y-reading-guide {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        letter-spacing: normal !important;
        word-spacing: normal !important;
        line-height: normal !important;
        text-align: left !important;
        filter: none !important;
      }
    `)

    styleRef.current.textContent = rules.join('\n')

    // Clean up classes
    html.classList.toggle('a11y-active', JSON.stringify(state) !== JSON.stringify(defaultState))
  }, [state])

  // Reading guide
  useEffect(() => {
    if (!state.readingGuide) {
      if (guideRef.current) {
        guideRef.current.remove()
        guideRef.current = null
      }
      return
    }

    if (!guideRef.current) {
      const guide = document.createElement('div')
      guide.id = 'a11y-reading-guide'
      guide.style.cssText = `
        position: fixed; left: 0; width: 100%; height: 12px;
        background: rgba(255, 215, 0, 0.35); border-top: 2px solid #FFD700; border-bottom: 2px solid #FFD700;
        pointer-events: none; z-index: 99998; transition: top 0.05s linear;
      `
      document.body.appendChild(guide)
      guideRef.current = guide
    }

    const handleMouse = (e: MouseEvent) => {
      if (guideRef.current) {
        guideRef.current.style.top = `${e.clientY - 6}px`
      }
    }

    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [state.readingGuide])

  const update = useCallback((partial: Partial<A11yState>) => {
    setState((prev) => ({ ...prev, ...partial }))
  }, [])

  const resetAll = useCallback(() => {
    setState(defaultState)
    if (guideRef.current) {
      guideRef.current.remove()
      guideRef.current = null
    }
  }, [])

  const applyProfile = useCallback((profile: string) => {
    resetAll()
    switch (profile) {
      case 'motor':
        setState((prev) => ({ ...prev, bigCursor: true, focusHighlight: true, highlightLinks: true }))
        break
      case 'blind':
        setState((prev) => ({ ...prev, textSize: 3, highlightLinks: true, highlightHeadings: true, focusHighlight: true, readableFont: true, lineHeight: 2 }))
        break
      case 'colorblind':
        setState((prev) => ({ ...prev, monochrome: true, highlightLinks: true, highlightHeadings: true }))
        break
      case 'dyslexia':
        setState((prev) => ({ ...prev, dyslexiaFont: true, textSize: 1, lineHeight: 2, letterSpacing: 2, wordSpacing: 2, highlightLinks: true }))
        break
      case 'cognitive':
        setState((prev) => ({ ...prev, readableFont: true, textSize: 1, lineHeight: 1, highlightLinks: true, highlightHeadings: true, readingGuide: true }))
        break
      case 'seizure':
        setState((prev) => ({ ...prev, stopAnimations: true, lowSaturation: true }))
        break
    }
  }, [resetAll])

  const isDefault = JSON.stringify(state) === JSON.stringify(defaultState)

  const tabs = [
    { id: 'profiles' as const, label: 'Profiles', icon: Accessibility },
    { id: 'content' as const, label: 'Content', icon: Type },
    { id: 'color' as const, label: 'Color', icon: Eye },
    { id: 'navigation' as const, label: 'Navigation', icon: MousePointer2 },
  ]

  const profiles = [
    { id: 'motor', label: 'Motor Impaired', icon: '🖐️' },
    { id: 'blind', label: 'Visually Impaired', icon: '👁️' },
    { id: 'colorblind', label: 'Color Blind', icon: '🎨' },
    { id: 'dyslexia', label: 'Dyslexia Friendly', icon: '📖' },
    { id: 'cognitive', label: 'Cognitive', icon: '🧠' },
    { id: 'seizure', label: 'Seizure Safe', icon: '⚡' },
  ]

  return (
    <>
      {/* Trigger Button */}
      <button
        id="a11y-trigger"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[9998] w-14 h-14 rounded-full bg-electric-500 text-white shadow-lg hover:bg-electric-600 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Open accessibility menu"
        title="Accessibility Options"
      >
        <Accessibility className="w-7 h-7" />
      </button>

      {/* Panel Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999]" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Panel */}
      <div
        id="a11y-widget"
        className={`fixed top-0 left-0 h-full w-[360px] max-w-[90vw] bg-white shadow-2xl z-[10000] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-navy-900 text-white shrink-0">
          <div className="flex items-center gap-2">
            <Accessibility className="w-5 h-5" />
            <span className="font-semibold text-base">Accessibility</span>
          </div>
          <div className="flex items-center gap-1">
            {!isDefault && (
              <button
                onClick={resetAll}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-sm flex items-center gap-1"
                title="Reset all settings"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close accessibility menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-xs font-medium flex flex-col items-center gap-1 transition-colors ${
                  activeTab === tab.id
                    ? 'text-electric-500 border-b-2 border-electric-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Profiles Tab */}
          {activeTab === 'profiles' && (
            <div className="grid grid-cols-2 gap-3">
              {profiles.map((p) => (
                <button
                  key={p.id}
                  onClick={() => applyProfile(p.id)}
                  className="p-4 rounded-xl border border-gray-200 hover:border-electric-400 hover:bg-electric-50 transition-all text-center"
                >
                  <span className="text-2xl block mb-2">{p.icon}</span>
                  <span className="text-xs font-medium text-gray-700">{p.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              <SliderControl
                label="Text Size"
                value={state.textSize}
                min={-2}
                max={5}
                onChange={(v) => update({ textSize: v })}
              />
              <SliderControl
                label="Line Height"
                value={state.lineHeight}
                min={0}
                max={4}
                onChange={(v) => update({ lineHeight: v })}
              />
              <SliderControl
                label="Letter Spacing"
                value={state.letterSpacing}
                min={0}
                max={5}
                onChange={(v) => update({ letterSpacing: v })}
              />
              <SliderControl
                label="Word Spacing"
                value={state.wordSpacing}
                min={0}
                max={5}
                onChange={(v) => update({ wordSpacing: v })}
              />
              <ToggleControl
                label="Dyslexia-Friendly Font"
                active={state.dyslexiaFont}
                onToggle={() => update({ dyslexiaFont: !state.dyslexiaFont, readableFont: false })}
              />
              <ToggleControl
                label="Readable Serif Font"
                active={state.readableFont}
                onToggle={() => update({ readableFont: !state.readableFont, dyslexiaFont: false })}
              />
              <div>
                <p className="text-xs font-medium text-gray-600 mb-2">Text Alignment</p>
                <div className="flex gap-2">
                  {(['', 'left', 'center', 'right'] as const).map((align) => (
                    <button
                      key={align || 'default'}
                      onClick={() => update({ textAlign: align })}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium border transition-colors ${
                        state.textAlign === align
                          ? 'bg-electric-500 text-white border-electric-500'
                          : 'border-gray-200 text-gray-600 hover:border-electric-300'
                      }`}
                    >
                      {align || 'Default'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Color Tab */}
          {activeTab === 'color' && (
            <div className="space-y-3">
              <ToggleControl label="High Contrast" active={state.highContrast} onToggle={() => update({ highContrast: !state.highContrast })} />
              <ToggleControl label="Dark Mode" active={state.darkMode} onToggle={() => update({ darkMode: !state.darkMode, lightMode: false, invertColors: false })} />
              <ToggleControl label="Light Mode" active={state.lightMode} onToggle={() => update({ lightMode: !state.lightMode, darkMode: false, invertColors: false })} />
              <ToggleControl label="Invert Colors" active={state.invertColors} onToggle={() => update({ invertColors: !state.invertColors, darkMode: false, lightMode: false })} />
              <ToggleControl label="Monochrome" active={state.monochrome} onToggle={() => update({ monochrome: !state.monochrome, lowSaturation: false, highSaturation: false })} />
              <ToggleControl label="Low Saturation" active={state.lowSaturation} onToggle={() => update({ lowSaturation: !state.lowSaturation, monochrome: false, highSaturation: false })} />
              <ToggleControl label="High Saturation" active={state.highSaturation} onToggle={() => update({ highSaturation: !state.highSaturation, monochrome: false, lowSaturation: false })} />
              <ToggleControl label="Highlight Links" active={state.highlightLinks} onToggle={() => update({ highlightLinks: !state.highlightLinks })} />
              <ToggleControl label="Highlight Headings" active={state.highlightHeadings} onToggle={() => update({ highlightHeadings: !state.highlightHeadings })} />
            </div>
          )}

          {/* Navigation Tab */}
          {activeTab === 'navigation' && (
            <div className="space-y-3">
              <ToggleControl label="Big Cursor" active={state.bigCursor} onToggle={() => update({ bigCursor: !state.bigCursor })} />
              <ToggleControl label="Reading Guide" active={state.readingGuide} onToggle={() => update({ readingGuide: !state.readingGuide })} />
              <ToggleControl label="Focus Highlight" active={state.focusHighlight} onToggle={() => update({ focusHighlight: !state.focusHighlight })} />
              <ToggleControl label="Hide Images" active={state.hideImages} onToggle={() => update({ hideImages: !state.hideImages })} />
              <ToggleControl label="Stop Animations" active={state.stopAnimations} onToggle={() => update({ stopAnimations: !state.stopAnimations })} />
              <ToggleControl label="Show Tooltips" active={state.tooltips} onToggle={() => update({ tooltips: !state.tooltips })} />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 shrink-0">
          <button
            onClick={() => setShowStatement(true)}
            className="w-full text-center text-xs text-gray-500 hover:text-electric-500 transition-colors"
          >
            Accessibility Statement
          </button>
        </div>
      </div>

      {/* Accessibility Statement Modal */}
      {showStatement && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4" onClick={() => setShowStatement(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowStatement(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Accessibility Statement</h2>
            <div className="text-sm text-gray-600 space-y-3">
              <p>
                Westek Electric Corp. is committed to ensuring digital accessibility for people with
                disabilities. We are continually improving the user experience for everyone and
                applying the relevant accessibility standards.
              </p>
              <h3 className="font-semibold text-gray-800">Conformance Status</h3>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
                These guidelines explain how to make web content more accessible for people with
                disabilities and more user-friendly for everyone.
              </p>
              <h3 className="font-semibold text-gray-800">Accessibility Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Adjustable text size, spacing, and fonts</li>
                <li>High contrast and color adjustment modes</li>
                <li>Screen reader compatibility</li>
                <li>Keyboard navigation support</li>
                <li>Reading guide and focus indicators</li>
                <li>Animation controls for seizure safety</li>
                <li>Pre-configured accessibility profiles</li>
              </ul>
              <h3 className="font-semibold text-gray-800">Contact Us</h3>
              <p>
                If you encounter any accessibility barriers on our website, please contact us
                at <a href="mailto:westekelectriccompany@gmail.com" className="text-electric-500 underline">westekelectriccompany@gmail.com</a> or
                call <a href="tel:+19099966678" className="text-electric-500 underline">(909) 996-6678</a>.
                We welcome your feedback and will make reasonable efforts to address the issue.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// --- Sub-components ---

function ToggleControl({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-colors ${
        active ? 'bg-electric-50 border-electric-400' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div
        className={`w-10 h-6 rounded-full transition-colors relative ${
          active ? 'bg-electric-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
            active ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </div>
    </button>
  )
}

function SliderControl({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-600">{label}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 text-sm font-bold"
          >
            -
          </button>
          <span className="text-xs w-6 text-center font-medium text-gray-700">{value}</span>
          <button
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 text-sm font-bold"
          >
            +
          </button>
        </div>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-electric-500 rounded-full transition-all"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  )
}
