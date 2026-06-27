import type { Operator, OperatorModule, StagedModule, BaseModule } from '../../types'

function isStagedModule(mod: OperatorModule): mod is StagedModule {
  return 'stages' in mod
}

export function ModulesPanel({ operator }: { operator: Operator }) {
  const moduleEntries = Object.values(operator.modules)
  const hasModules = moduleEntries.length > 0

  if (!hasModules) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
          <svg className="w-7 h-7 text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-display text-sm text-white/25 tracking-wider">— Module not available —</p>
          <p className="text-[10px] text-white/15 mt-2 font-display">This operator does not support module equipment</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-5">
      {moduleEntries.map((operatorModule) => (
        <div key={operatorModule.code} className="bg-white/[0.04] border border-white/[0.08] p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-display text-[10px] px-2 py-0.5 bg-ak-gold/20 text-ak-gold-bright border border-ak-gold/30 rounded-sm font-bold">{operatorModule.code}</span>
            <span className="font-display text-sm text-white/80 font-semibold">{operatorModule.name}</span>
          </div>
          {isStagedModule(operatorModule) ? (
            <div className="grid gap-2">
              {operatorModule.stages.map((moduleStage) => (
                <div key={moduleStage.stage} className="bg-white/[0.06] border border-white/[0.06] p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display text-xs font-bold text-ak-gold-bright">Stage {moduleStage.stage}</span>
                    <span className="text-[10px] text-white/40">
                      {moduleStage.hp ? `HP ${moduleStage.hp} · ` : ''}
                      {moduleStage.atk ? `ATK ${moduleStage.atk}` : ''}
                      {moduleStage.def ? ` · DEF ${moduleStage.def}` : ''}
                      {moduleStage.res ? ` · RES ${moduleStage.res}` : ''}
                      {moduleStage.aspd ? ` · ASPD +${moduleStage.aspd}` : ''}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/45 leading-relaxed">{moduleStage.effect}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[11px] text-white/45 leading-relaxed">{(operatorModule as BaseModule).desc}</p>
          )}
        </div>
      ))}
    </div>
  )
}
