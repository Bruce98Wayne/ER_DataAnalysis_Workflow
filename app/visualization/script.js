console.log("helloooooo")

var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
    
var barHeight = 20;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var chart = d3.select(".chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

var allgroup = chart.append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");   

var tooltip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
    return "<span style='color:palevioletred'>" + d.name +": "+ numberWithCommas(d.count) + "</span>";
})

allgroup.call(tooltip);

d3.csv("./state_message.csv", type, function(error, data) {
    x.domain(d3.range(data.length))
	y.domain([0, d3.max(data, function(d) { return d.count; })]);

    chart.attr("height", margin.top + barHeight * data.length);
    
	var bar = allgroup.selectAll("g")
                .data(data)
                .enter()
                .append("rect")
                .attr("fill", "turquoise")
                .attr("transform", function(d, i) { return "translate(0," + barHeight + ")"; })
                .attr("x", function(d,i) { return x(i);})
                .attr("width", x.rangeBand())
                .attr("y", function(d) { return y(d.count); })
                .attr("height", function(d) { return height - y(d.count); })
                .on('mouseover', function(d){
                    d3.select(this).attr("fill", "pink")
                    tooltip.show(d);
                })
                .on('mouseout', function(d){
                    d3.select(this).attr("fill", "turquoise")
                    tooltip.hide(d);
                })
                .on("click",sortBar);
})

function type(d) {
	d.count = +d.count;
	return d;
}

var sortBar = function() {
    chart.selectAll("rect")
        .sort(function(a, b) {
            return d3.ascending(a.count, b.count);
        })
        .transition()
        .delay(function (d, i) {
        return i * 20;
        })
        .duration(1000)
        .attr("x", function (d, i) {
        return x(i);
        });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


