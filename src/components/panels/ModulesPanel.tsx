import type { Operator, OperatorModule, StagedModule, BaseModule } from '../../types'

function isStagedModule(mod: OperatorModule): mod is StagedModule {
  return 'stages' in mod
}

export function ModulesPanel({ operator }: { operator: Operator }) {
  const moduleEntries = Object.values(operator.modules)

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
