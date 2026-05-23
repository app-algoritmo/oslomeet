/**
 * OSLO MEET - AI MATCHING ENGINE
 * MVP: Rule-based scoring with semantic tags
 * Future: Replace with vector search + OpenAI embeddings
 */

const MatchingEngine = {
    /**
     * Calculate compatibility score between two companies
     * @param {Object} companyA - First company profile
     * @param {Object} companyB - Second company profile
     * @returns {Object} { score, reasons, breakdown }
     */
    calculateScore(companyA, companyB) {
        let score = 0;
        const reasons = [];
        const breakdown = {};

        // 1. Industry Complementarity (30%)
        const industryScore = this.calculateIndustryFit(companyA.industry, companyB.industry);
        score += industryScore * 0.30;
        breakdown.industry = industryScore;

        // 2. Goal Alignment (25%)
        const goalScore = this.calculateGoalOverlap(companyA.goals, companyB.goals);
        score += goalScore * 0.25;
        breakdown.goals = goalScore;

        // 3. Market Overlap (20%)
        const marketScore = this.calculateMarketOverlap(companyA.markets, companyB.markets);
        score += marketScore * 0.20;
        breakdown.markets = marketScore;

        // 4. Tech/Skill Synergy (15%)
        const techScore = this.calculateTechSynergy(companyA.technologies, companyB.technologies);
        score += techScore * 0.15;
        breakdown.technology = techScore;

        // 5. Collaboration Preferences (10%)
        const collabScore = this.calculateCollabFit(companyA.collabTypes, companyB.collabTypes);
        score += collabScore * 0.10;
        breakdown.collaboration = collabScore;

        // Generate reasons
        if (industryScore > 0.7) reasons.push("Complementary industries");
        if (goalScore > 0.7) reasons.push("Aligned strategic goals");
        if (marketScore > 0.7) reasons.push("Shared market focus");
        if (techScore > 0.7) reasons.push("Tech stack synergy");

        return {
            score: Math.round(score * 100),
            reasons,
            breakdown
        };
    },

    /**
     * Check if two industries are complementary
     */
    calculateIndustryFit(industryA, industryB) {
        const complementary = {
            tech: ['logistics', 'fintech', 'health', 'energy', 'retail'],
            logistics: ['tech', 'energy', 'retail'],
            fintech: ['tech', 'consulting', 'retail'],
            health: ['tech', 'consulting'],
            energy: ['logistics', 'tech', 'consulting'],
            retail: ['logistics', 'fintech', 'tech'],
            consulting: ['fintech', 'health', 'energy'],
            creative: ['tech', 'retail']
        };

        if (complementary[industryA]?.includes(industryB)) return 1;
        if (complementary[industryB]?.includes(industryA)) return 1;
        if (industryA === industryB) return 0.3; // Same industry = lower complementarity
        return 0.5; // Default
    },

    /**
     * Calculate goal overlap
     */
    calculateGoalOverlap(goalsA, goalsB) {
        if (!goalsA || !goalsB) return 0;
        const shared = goalsA.filter(g => goalsB.includes(g));
        return Math.min(shared.length / Math.max(goalsA.length, goalsB.length), 1);
    },

    /**
     * Calculate market overlap
     */
    calculateMarketOverlap(marketsA, marketsB) {
        if (!marketsA || !marketsB) return 0;
        const shared = marketsA.filter(m => marketsB.includes(m));
        return shared.length > 0 ? Math.min(shared.length / 3, 1) : 0;
    },

    /**
     * Calculate tech synergy
     */
    calculateTechSynergy(techsA, techsB) {
        if (!techsA || !techsB) return 0;
        const shared = techsA.filter(t =>
            techsB.some(bt => bt.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(bt.toLowerCase()))
        );
        return Math.min(shared.length / 2, 1);
    },

    /**
     * Calculate collaboration type fit
     */
    calculateCollabFit(typesA, typesB) {
        if (!typesA || !typesB) return 0;
        const shared = typesA.filter(t => typesB.includes(t));
        return Math.min(shared.length / 2, 1);
    },

    /**
     * Find best matches for a company from a pool
     */
    findBestMatches(company, pool, limit = 5) {
        const scored = pool.map(other => {
            if (other.id === company.id) return null;
            const result = this.calculateScore(company, other);
            return {
                company: other,
                ...result
            };
        }).filter(Boolean);

        return scored
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MatchingEngine;
}
