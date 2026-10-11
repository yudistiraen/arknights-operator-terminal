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
        <div className="w-16 h-16 bg-gc-base border border-gc-line flex items-center justify-center">
          <svg className="w-7 h-7 text-gc-ghost" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-data text-[11px] text-gc-dim tracking-[0.14em] uppercase">No module</p>
          <p className="font-body text-[13px] text-gc-text mt-2">This operator can’t equip modules.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-5">
      {moduleEntries.map((operatorModule) => (
        <div key={operatorModule.code} className="bg-gc-base border border-gc-line p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-data text-[10px] px-2 py-0.5 bg-gc-invert text-gc-void font-semibold tracking-[0.08em]">{operatorModule.code}</span>
            <span className="font-body text-sm text-gc-ink font-semibold">{operatorModule.name}</span>
          </div>
          {isStagedModule(operatorModule) ? (
            <div className="grid gap-2">
              {operatorModule.stages.map((moduleStage) => (
                <div key={moduleStage.stage} className="bg-gc-panel border border-gc-line-soft p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-data text-[11px] font-medium text-gc-signal tracking-[0.12em] uppercase">Stage {moduleStage.stage}</span>
                    <span className="font-data text-[10px] text-gc-dim tabular-nums">
                      {moduleStage.hp ? `HP ${moduleStage.hp} · ` : ''}
                      {moduleStage.atk ? `ATK ${moduleStage.atk}` : ''}
                      {moduleStage.def ? ` · DEF ${moduleStage.def}` : ''}
                      {moduleStage.res ? ` · RES ${moduleStage.res}` : ''}
                      {moduleStage.aspd ? ` · ASPD +${moduleStage.aspd}` : ''}
                    </span>
                  </div>
                  <p className="font-body text-[12px] leading-[1.7] text-gc-text">{moduleStage.effect}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-body text-[12px] leading-[1.7] text-gc-text">{(operatorModule as BaseModule).desc}</p>
          )}
        </div>
      ))}
    </div>
  )
}
